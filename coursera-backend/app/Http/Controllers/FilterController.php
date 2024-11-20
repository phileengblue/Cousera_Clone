<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\FilterRequest;

class FilterController extends Controller
{
    public function filter(FilterRequest $request)
    {
        // Recupera tutti i dati dalla richiesta
        $data = $request->all();

        // Inizializza la query di base per i corsi
        $courses = Course::query()
        ->leftJoin('reviews', 'courses.id', '=', 'reviews.course_id')
        ->select('courses.*', 
                 DB::raw('COUNT(reviews.id) as review_count'),  // Numero di recensioni
                 DB::raw('AVG(reviews.vote) as average_vote'))  // Media dei voti
        ->groupBy('courses.id');

        // filtro per durata
        if(isset($data['duration_unit']) && isset($data['duration_min']) && isset($data['duration_max'])) {
            $duration_unit = $data['duration_unit'];
            $duration_min = $data['duration_min'];
            $duration_max = $data['duration_max'];
            $courses = $courses->where('duration_unit', $duration_unit)
                ->where('duration', '>=', $duration_min)
                ->where('duration', '<=', $duration_max);
        }

        // filtro per categoria
        if (isset($data['category_id']) && !empty($data['category_id'])) {
            $category_id = $data['category_id'];
            $courses = $courses->whereIn('category_id', (array) $category_id);
        }

        // filtro per lingua
        if (isset($data['language'])) {
            $language = $data['language'];
            $courses = $courses->whereIn('language', (array)  $language);
        }

        // filtro per prodotto di argomento
        if (isset($data['productTypeDescription'])) {
            $productTypeDescription = $data['productTypeDescription'];
            $courses = $courses->whereIn('productTypeDescription', (array)  $productTypeDescription);
        }

        // filtro per livello di difficolta'
        if (isset($data['difficulty_level'])) {
            $difficulty_level = $data['difficulty_level'];
            $courses = $courses->whereIn('difficulty_level', (array) $difficulty_level);
        }

        // filtro per competenza
        if (isset($data['skill'])) {
            $skill = $data['skill'];
            $courses = $courses->whereHas('skills', function ($query) use ($skill) {
                $query->whereIn('name', (array) $skill);
            }); 
        }

        // filtro per universita'
        if (isset($data['university'])) {
            $university = $data['university'];
            $courses = $courses->whereHas('universities', function ($query) use ($university) {
                $query->whereIn('name', (array) $university);
            });
        }

        //searchbar
        if(isset($data['keyword'])) {
            $keyword = $data['keyword'];
            $courses = $courses->where(function($query) use ($keyword) {
                $query->where('title', 'LIKE', '%' . $keyword . '%')
                    ->orWhere('language', 'LIKE', '%' . $keyword . '%')
                    ->orWhere('productTypeDescription', 'LIKE', '%' . $keyword . '%')
                    ->orWhere('difficulty_level', 'LIKE', '%' . $keyword . '%');
            });
            
            if($keyword == 'gratis'){
                $courses = $courses->where('price', 0);
            }
        }

        $ordering = $data['ordering'] ?? 'default';

        // ordinamento per più recenti
        if ($ordering == 'recent') {
            $courses = $courses->orderByDesc('created_at');
        }
        
        //ordinamento per miglior corrispondenza
        if ($ordering == 'corrispondence') {
            $courses = $courses->orderByDesc('average_vote')
                            ->orderByDesc('review_count');
        }
        
        
        // Esegui la query e recupera i corsi filtrati
        $courses = $courses->with(['filestorage', 'universities.filestorage'])->get();

        // Mappiamo i corsi per includere gli URL delle immagini e l'università come singolo oggetto
        $courses = $courses->map(function ($course) {
            // Verifica se filestorage è disponibile per il corso
            $courseImage = $course->filestorage ? asset('storage/' . $course->filestorage->path) : null;

            // Assumiamo che ogni corso abbia una sola università, quindi prendiamo la prima università
            $university = $course->universities->first(); // Prendi la prima università associata

            // Verifica se filestorage è disponibile per l'università
            $universityImage = $university && $university->filestorage ? asset('storage/' . $university->filestorage->path) : null;

            return [
                'id' => $course->id,
                'title' => $course->title,
                'difficulty_level' => $course->difficulty_level,
                'productTypeDescription' => $course->productTypeDescription,
                'language' => $course->language,
                'duration' => $course->duration,
                'duration_unit' => $course->duration_unit,
                'price' => $course->price,
                'category_id' => $course->category_id,
                'review_count' => $course->review_count,
                'average_vote' => round($course->average_vote, 1),
                'courseImage' => $courseImage,
                'university' => [
                    'name' => $university ? $university->name : null,
                    'image' => $universityImage
                ],
            ];
        });

         // Chiama la funzione per ottenere i contatori
         $courseCounts = $this->getCourseCounts();

        // Restituisci i corsi filtrati come risposta JSON
        return response()->json([
            'courses' => $courses,
            'courseCounts' => $courseCounts,
        ], 200);
    }

    private function getCourseCounts()
    {
        // Conteggio per categoria
        $categoryCount = Course::query()
            ->join('categories', 'courses.category_id', '=', 'categories.id')
            ->groupBy('categories.alias')
            ->selectRaw('categories.alias, COUNT(*) as count')
            ->pluck('count', 'categories.alias');

        // Conteggio per lingua
        $languageCount = Course::query()
            ->select('language')
            ->groupBy('language')
            ->selectRaw('language, COUNT(*) as count')
            ->pluck('count', 'language');

        // Conteggio per livello di difficoltà
        $difficultyLevelCount = Course::query()
            ->select('difficulty_level')
            ->groupBy('difficulty_level')
            ->selectRaw('difficulty_level, COUNT(*) as count')
            ->pluck('count', 'difficulty_level');

        // Conteggio per università usando la tabella pivot course_universities
        $universityCount = Course::query()
            ->join('course_universities', 'courses.id', '=', 'course_universities.course_id')
            ->join('universities', 'course_universities.university_id', '=', 'universities.id')
            ->groupBy('universities.name')
            ->selectRaw('universities.name, COUNT(*) as count')
            ->pluck('count', 'universities.name');

        // Conteggio per productTypeDescription
        $productTypeDescriptionCount = Course::query()
            ->select('productTypeDescription')
            ->groupBy('productTypeDescription')
            ->selectRaw('productTypeDescription, COUNT(*) as count')
            ->pluck('count', 'productTypeDescription');

        // Conteggio per skill (competenze) usando la tabella pivot course_skill
        $skillCount = Course::query()
            ->join('course_skills', 'courses.id', '=', 'course_skills.course_id')
            ->join('skills', 'course_skills.skill_id', '=', 'skills.id')
            ->groupBy('skills.name')
            ->selectRaw('skills.name, COUNT(*) as count')
            ->pluck('count', 'skills.name');

        // Conteggio per durata del corso
        $durationCount = [
            'less_than_2_hours' => Course::query()
                ->where('duration_unit', 'hours')
                ->where('duration', '<', 2)
                ->count(),
            '1_to_4_weeks' => Course::query()
                ->where('duration_unit', 'weeks')
                ->whereBetween('duration', [1, 4])
                ->count(),
            '1_to_3_months' => Course::query()
                ->where('duration_unit', 'months')
                ->whereBetween('duration', [1, 3])
                ->count(),
            '3_to_6_months' => Course::query()
                ->where('duration_unit', 'months')
                ->whereBetween('duration', [3, 6])
                ->count(),
            '6_to_12_months' => Course::query()
                ->where('duration_unit', 'months')
                ->whereBetween('duration', [6, 12])
                ->count(),
            '1_to_4_years' => Course::query()
                ->where('duration_unit', 'months')
                ->whereBetween('duration', [12, 48])
                ->count(),
        ];

        // Restituiamo i risultati in un array unico
        return [
            'category_count' => $categoryCount,
            'language_count' => $languageCount,
            'difficulty_level_count' => $difficultyLevelCount,
            'university_count' => $universityCount,
            'product_type_description_count' => $productTypeDescriptionCount,
            'skill_count' => $skillCount,
            'duration_count' => $durationCount
        ];
    }


    /*public function durationFilter(Request $request)
    {
        $data = Course::where('duration_unit', $request->duration_unit)->where('duration', '>=', $request->duration_min)->where('duration', '<=', $request->duration_max)->get();
        return response()->json([
            'courses' => $data
        ], 200);
    }*/
}