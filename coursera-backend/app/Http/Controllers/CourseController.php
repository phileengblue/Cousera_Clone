<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Models\View;
use Cron\HoursField;
use App\Models\Course;
use App\Models\Category;
use App\Models\CourseUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\CourseRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use App\Http\Controllers\FilestorageController;

class CourseController extends Controller
{
    public function store(CourseRequest $request)
    {
        $data = $request->all();
        $user = auth()->user();

        $filestorage = FilestorageController::storeFile($request, 'image/course', 'file_img', 'course_img');

        $filestorage_id = 1;

        if($filestorage != null){
            $filestorage_id = $filestorage->id;
        }

        if ($user->hasRole('superadmin')){
            $course = Course::create([
                'title' => $data['title'],
                'description' => $data['description'],
                'language' => $data['language'],
                'productTypeDescription' => $data['productTypeDescription'],
                'difficulty_level' => $data['difficulty_level'],
                'duration' => $data['duration'],
                'duration_unit' => $data['duration_unit'],
                'price' => $data['price'],
                'start_date' => $data['start_date'],
                'parent_id' => $data['parent_id'],
                'category_id' => $data['category_id'],
                'filestorage_id' => $filestorage_id,
            ]);

            return response()->json([
                'message' => 'Courso aggiunto con successo',
                'course' => $course,
                'filestorage' => $filestorage
            ], 201);
        } else {
           return response()->json(['error' => 'Forbidden: Non hai il ruolo richiesto'], 403);
        }
    }

    public function index()
    {
        // Recupera tutti i corsi, incluse le università associate
        $courses = Course::with('universities')->get();

        // Crea un array per memorizzare i risultati con i dati dell'immagine
        $courseData = $courses->map(function ($course) {

            // Seleziona solo i campi desiderati del corso
            $courseInfo = [
                'id' => $course->id,
                'title' => $course->title,
                'category_id' => $course->category_id,
            ];

            // Trova i dettagli del file immagine associato al corso, se presente
            $fileData = null;

            if ($course->filestorage_id) {
                $fileStorage = app(FilestorageController::class)->getFileDataById($course->filestorage_id);
                if ($fileStorage->getStatusCode() == 200) {
                    $fileData = $fileStorage->getData()->file;
                }
            }

            // Aggiungi i dati dell'immagine al corso
            $courseInfo['image'] = $fileData;

            // Prendi la prima università associata
            $university = $course->universities->first();

            // Se esiste un'università associata, includi i dati
            if ($university) {
                $universityInfo = [
                    'id' => $university->id,
                    'name' => $university->name,
                ];

                // Trova i dettagli del file immagine associato all'università, se presente
                $universityFileData = null;

                if ($university['filestorage_id']) {
                    $fileStorage = app(FilestorageController::class)->getFileDataById($university['filestorage_id']);
                    if ($fileStorage->getStatusCode() == 200) {
                        $universityFileData = $fileStorage->getData()->file;
                    }
                }

                // Aggiungi i dati dell'immagine all'università
                $universityInfo['image'] = $universityFileData;

                // Aggiungi i dati dell'università come oggetto, non array
                $courseInfo['university'] = $universityInfo;
            } else {
                // Se non ci sono università, imposta il valore su null o un oggetto vuoto
                $courseInfo['university'] = null;
            }

            return $courseInfo;
        });

        // Restituisci solo i dati necessari come risposta JSON
        return response()->json($courseData);
    }


    public function show($id)
    {
        // Trova il corso tramite l'ID
        $course = Course::findOrFail($id);
    
        // Trova i dettagli del file immagine associato al corso, se presente
        $fileData = null;

        if ($course->filestorage_id) {

            $fileStorage = app(FilestorageController::class)->getFileDataById($course->filestorage_id);

            if ($fileStorage->getStatusCode() == 200) {

                $fileData = $fileStorage->getData()->file;
            }
        }
    
        return response()->json([
            'course' => $course,
            'image' => $fileData, // Dati dell'immagine
        ]);
    }

    public function update(CourseRequest $request, $id)
    {
        $user = auth()->user();
        $data = $request->all();

        if($user->hasRole('superadmin')){
            $course = Course::findOrFail($id);

            $filestorage = FilestorageController::storeFile($request, 'image/course', 'file_img', 'course_img');

            if(isset($data['file_img'])){
                $course -> update([
                    'title' => $data['title'],
                    'description' => $data['description'],
                    'language' => $data['language'],
                    'productTypeDescription' => $data['productTypeDescription'],
                    'difficulty_level' => $data['difficulty_level'],
                    'duration' => $data['duration'],
                    'duration_unit' => $data['duration_unit'],
                    'price' => $data['price'],
                    'start_date' => $data['start_date'],
                    'category_id' => $data['category_id'],
                    'filestorage_id' => $filestorage->id
                ]);
            } else {
                $course -> update([
                    'title' => $data['title'],
                    'description' => $data['description'],
                    'language' => $data['language'],
                    'productTypeDescription' => $data['productTypeDescription'],
                    'difficulty_level' => $data['difficulty_level'],
                    'duration' => $data['duration'],
                    'duration_unit' => $data['duration_unit'],
                    'price' => $data['price'],
                    'start_date' => $data['start_date'],
                    'category_id' => $data['category_id'],
                ]);
            }
        }
        return response()->json(['course' => $course, 'message' => 'Corso modificato con successo']);
    }

    public function destroy($id)
    {
        $user = auth()->user();
        if($user->hasRole('superadmin')){
            $course = Course::findOrFail($id);
            $course->delete();

            return response()->json(['message' => 'Corso eliminato con successo']);
        } else {
            return response()->json(['message' => 'Non hai i permessi']);
        }
    }

    public function getAllInformations()
    {
        $categories = Category::select('id','alias')->distinct()->get();
        $difficulty_levels = Course::select('difficulty_level')->distinct()->orderBy('difficulty_level', 'asc')->get();
        $productTypeDescription = Course::select('productTypeDescription')->distinct()->orderBy('productTypeDescription', 'desc')->get();

        return response()->json([
            'categories' => $categories,
            'difficulty_levels' => $difficulty_levels,
            'productTypeDescription' => $productTypeDescription
        ]);
    }

    public function getCourseInstructors($id) 
    {
        $course = Course::with(['users' => function ($query) {
            $query->wherePivot('is_professor', true);
        }])->findOrFail($id);


        return response()->json([
            'course' => $course,
            'message' => 'Professori recuperati con successo'
        ]);
    }

    public function MaxiIndex(Request $request)
    {
        // Ottieni la data corrente
        $currentDate = Carbon::now();

        // Ottieni tutti i corsi dal database
        $courses = Course::with(['filestorage'])->get();

        // Filtra i corsi per escludere quelli già iniziati o che iniziano oggi e quelli che non hanno un prezzo
        $filteredCourses = $courses->filter(function ($course) use ($currentDate) {
            // Verifica che la data di inizio sia futura (maggiori di oggi)
            $startDate = Carbon::parse($course->start_date); // Conversione in oggetto Carbon
            return $startDate->gt($currentDate) && !is_null($course->price);
        });

        // Trasforma i corsi filtrati applicando lo sconto dinamico
        $discountedCourses = $filteredCourses->map(function ($course) use ($currentDate) {
            // Calcola la differenza in giorni tra la data di inizio e oggi
            $startDate = Carbon::parse($course->start_date);
            $daysRemaining = $currentDate->diffInDays($startDate);

            // Se mancano meno di un giorno calcola le ore
            if ($daysRemaining == 0) {
                $hoursRemaining = $currentDate->diffInHours($startDate);

                // Se mancano meno di 24 ore, conta comunque come se mancasse un giorno
                if ($hoursRemaining < 24) {
                    $daysRemaining = 1;
                }
            }

            // Definisci la percentuale di sconto in base ai giorni rimanenti
            $discountPercentage = $this->calculateDiscount($daysRemaining);

            // Calcola il prezzo scontato
            $discountedPrice = $course->price - ($course->price * ($discountPercentage / 100));
            $discountedPrice = round($discountedPrice, 2); // Arrotonda a 2 decimali

            // Ottieni il percorso dell'immagine
            $image = $course->filestorage ? $course->filestorage : null;

            //Personalizza la response
            return [
                'id' => $course->id,
                'title' => $course->title,
                'start_date' => $startDate->format('Y-m-d'), // Formatta la data di inizio
                'original_price' => $course->price,
                'discounted_price' => $discountedPrice,
                'discount_percentage' => $discountPercentage . '%',
                'days_remaining' => $daysRemaining,
                'image' => $image
            ];
        });


        // Filtrare i corsi in base al range di sconto
        $discountRange = $request->input('discount_range');
        if ($discountRange) {
            // Determina i limiti in base al range specificato
            switch ($discountRange) {
                case "20-40":
                    $minDiscount = 20;
                    $maxDiscount = 40;
                    break;
                case "40-60":
                    $minDiscount = 40;
                    $maxDiscount = 60;
                    break;
                case "60-80":
                    $minDiscount = 60;
                    $maxDiscount = 80;
                    break;
                default:
                    $minDiscount = null;
                    $maxDiscount = null;
            }

            // Applica il filtro del range di sconto
            if ($minDiscount !== null && $maxDiscount !== null) {
                $discountedCourses = $discountedCourses->filter(function ($course) use ($minDiscount, $maxDiscount) {
                    // Converti la percentuale di sconto in numero
                    $discountPercentage = (int) filter_var($course['discount_percentage'], FILTER_SANITIZE_NUMBER_INT);
                    return $discountPercentage >= $minDiscount && $discountPercentage <= $maxDiscount;
                });
            }
        }

        //Filtro per corsi in scadenza nei prossimi 7 giorni
        $expiration = $request->input('expiration');
        if ($expiration === 'Corsi in scadenza') {
            $discountedCourses = $discountedCourses->filter(function ($course) {
                return $course['days_remaining'] <= 7;
            });
        }


        // Ordinamento dei corsi predefinito per prezzo scontato crescente
        $sortedCourses = $discountedCourses->sortBy([
            ['discounted_price', 'asc'],
            ['discount_percentage', 'desc'],
            ['title', 'asc']
        ]);

        $order = $request->input('order');

        //Prezzo decrescente (più alto più basso)
        if ($order === 'Prezzo più alto') {
            $sortedCourses = $discountedCourses->sortBy([
                ['discounted_price', 'desc'],
                ['discount_percentage', 'desc'],
                ['title', 'asc']
            ]);
        }

        // Ordinamento dei corsi predefinito per prezzo crescente
        /*$sortedCourses = $discountedCourses->sortBy('discounted_price');

        // Verifica se ci sono corsi con lo stesso prezzo e applica i successivi ordinamenti
        $sortedCourses = $sortedCourses->groupBy('discounted_price')->flatMap(function ($group) {
            if ($group->count() > 1) {
                // Se ci sono corsi con lo stesso prezzo, ordina per percentuale di sconto
                $group = $group->sortByDesc('discount_percentage');

                // Se ci sono corsi con la stessa percentuale di sconto, ordina per titolo
                return $group->groupBy('discount_percentage')->flatMap(function ($subGroup) {
                    if ($subGroup->count() > 1) {
                        // Se ci sono più corsi con la stessa percentuale di sconto, ordina per titolo
                        return $subGroup->sortBy('title');
                    }
                    return $subGroup; // Restituisci il sottogruppo senza modifiche se c'è solo un corso
                });
            }

            return $group; // Restituisci il gruppo senza modifiche se c'è solo un corso con quel prezzo
        });*/

        return response()->json($sortedCourses);
    }

    // Funzione per calcolare lo sconto in base ai giorni rimanenti
    private function calculateDiscount($daysRemaining)
    {
        // Logica di sconto in base ai giorni rimanenti
        if ($daysRemaining > 30) {
            return 0;  // Nessuno sconto se la data è più lontana di 30 giorni
        } elseif ($daysRemaining > 15) {
            return 20;  // 20% di sconto se mancano tra 16 e 30 giorni
        } elseif ($daysRemaining > 7) {
            return 40;  // 40% di sconto se mancano tra 8 e 15 giorni
        } elseif ($daysRemaining > 1) {
            return 60;  // 60% di sconto se mancano tra 2 e 7 giorni
        } elseif ($daysRemaining == 1) {
            return 80;  // 80% di sconto se manca solo 1 giorno
        }

        return 0; // Fallback nel caso in cui non ci sia uno sconto applicabile
    }


    //Cards corsi utente non loggato
    public function getMostPopularCourses()
    {
        // Recupera le associazioni CourseUser con il conteggio delle registrazioni degli studenti
        $popularCourses = CourseUser::select('course_id', DB::raw('count(*) as total'))
            ->where('is_professor', false)
            ->groupBy('course_id')
            ->with(['courses.filestorage', 'courses.universities.filestorage'])
            ->take(4)
            ->get();

        // Mappa i risultati per rimuovere course_id e total
        $formattedCourses = $popularCourses->map(function ($courseUser) {
            return $courseUser->courses; // Restituisce solo i dati del corso
        });

        // Restituisce la risposta JSON
        return $formattedCourses;
    }


    public function newCourses()
    {
        return Course::with(['filestorage', 'universities.filestorage'])
            ->orderBy('created_at', 'desc')
            ->take(4)
            ->get();
    }


    public function freeCourses()
    {
        return Course::with(['filestorage', 'universities.filestorage'])
            ->where('price', null)
            ->inRandomOrder()
            ->take(4)
            ->get();
    }


    public function MasterDegreeCourses()
    {
        return Course::with(['filestorage', 'universities.filestorage'])
            ->whereIn('productTypeDescription', ['master', 'degree_certificate', 'degree'])
            ->inRandomOrder()
            ->take(4)
            ->get();
    }

    
    public function hightLevelDegrees()
    {
        return Course::with(['filestorage', 'universities.filestorage'])
            ->whereIn('productTypeDescription', ['master', 'degree_certificate', 'degree'])
            ->inRandomOrder()
            ->take(4)
            ->get();
    }


    public function indexHomePage() 
    {
        // Recupera i dati dai vari metodi
        $popularCourses = $this->getMostPopularCourses();
        $newCourses = $this->newCourses();
        $freeCourses = $this->freeCourses();
        $masterDegreeCourses = $this->MasterDegreeCourses();
        $hightLevelDegrees = $this->hightLevelDegrees();
        $popularInBusiness = $this->getMostPopularInBusiness();
        $recentlyViewed = $this->recentlyViewedCourses();
        $personalizedSpecializations = $this->personalizedSpecializations();
        $personalizedCourses = $this->personalizedCourses();
        $personalizedGuidedProjects = $this->personalizedGuidedProjects();
        $twoHoursCourses = $this->TwoHoursCourses();

        // Compatta i dati in un array
        $coursesData = [
            'popular_courses' => $popularCourses,
            'new_courses' => $newCourses,
            'free_courses' => $freeCourses,
            'degree_courses' => $masterDegreeCourses,
            'hight_level_degrees' => $hightLevelDegrees,
            'popular_in_business' => $popularInBusiness,
            'recently_viewed' => $recentlyViewed,
            'personalized_specializations' => $personalizedSpecializations,
            'personalized_courses' => $personalizedCourses,
            'personalized_guided_projects' => $personalizedGuidedProjects,
            'two_hours_courses' => $twoHoursCourses,
        ];

        // Restituisci la risposta JSON
        return response()->json([
            'message' => 'Corsi recuperati con successo.',
            'courses' => $coursesData
        ], 200);
    }


    //Cards corsi utente loggato
    public function getMostPopularInBusiness()
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Non autenticato'], 403);
        }

        $popularInBusiness = CourseUser::select('course_id', DB::raw('count(*) as total'))
            ->where('is_professor', false)
            ->groupBy('course_id')
            ->with(['courses' => function ($query) {
                $query->where('category_id', 2)->with(['filestorage', 'universities.filestorage']);
            }])
            ->orderByDesc('total')
            ->take(4)
            ->get();

        // Mappa i risultati per rimuovere course_id e total
        $formattedCourses = $popularInBusiness->map(function ($courseUser) {
            return $courseUser->courses; // Restituisce solo i dati del corso
        })->filter(); // Filtra eventuali null (corsi che non appartengono alla categoria 2)

        return response()->json($formattedCourses);
    }


    public function recentlyViewedCourses()
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Non autenticato'], 403);
        }

        $recentlyViewedCourses = View::where('user_id', $user->id)
            ->orderByDesc('created_at')
            ->take(4)
            ->with(['courses.filestorage', 'courses.universities.filestorage'])
            ->get();
            
        $formattedCourses = $recentlyViewedCourses->map(function ($view) {
            return $view->courses; // Restituisce solo i dati del corso
        });

        return response()->json($formattedCourses);
    }


    public function personalizedSpecializations()
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Non autenticato'], 403);
        }

        // Recupera gli ID dei corsi visualizzati dall'utente
        $viewedCourseIds = View::where('user_id', $user->id)->pluck('course_id')->toArray();

        // Recupera i corsi visualizzati e le loro caratteristiche
        $viewedCourses = Course::whereIn('id', $viewedCourseIds)->get();

        // Definisci un array per memorizzare i corsi correlati
        $relatedSpecializations = collect();

        // Cerca specializzazioni correlate per ciascun corso visualizzato
        foreach ($viewedCourses as $course) {
            $similarSpecializations = Course::where('id', '!=', $course->id) // Escludi il corso corrente
                ->where('productTypeDescription', 'specialization') // Filtra solo specializzazioni
                ->where(function($query) use ($course) {
                    // Cerca specializzazioni con la stessa categoria, lingua o livello di difficoltà
                    $query->where('category_id', $course->category_id)
                        ->orWhere('language', $course->language)
                        ->orWhere('difficulty_level', $course->difficulty_level);
                })
                ->with(['filestorage', 'universities.filestorage']) //Inlcude l'immagine del corso e dell'università associata
                ->get();

            // Aggiungi le specializzazioni correlate alla collezione
            $relatedSpecializations = $relatedSpecializations->merge($similarSpecializations);
        }

        // Rimuovi eventuali duplicati
        $relatedSpecializations = $relatedSpecializations->unique('id')->take(4);

        return response()->json([
            'message' => 'Specializzazioni personalizzate per te recuperate con successo',
            'courses' => $relatedSpecializations
        ], 200);
    }


    public function personalizedCourses()
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Non autenticato'], 403);
        }

        $viewedCourseIds = View::where('user_id', $user->id)->pluck('course_id')->toArray();

        $viewedCourses = Course::whereIn('id', $viewedCourseIds)->get();

        $relatedCourses = collect();

        $similarCourses = collect();

        foreach ($viewedCourses as $course) {
            $similarCourses = Course::where('id', '!=', $course->id)
                ->where('productTypeDescription', 'course')
                ->where(function($query) use ($course) {
                    $query->where('category_id', $course->category_id)
                        ->orWhere('language', $course->language)
                        ->orWhere('difficulty_level', $course->difficulty_level);
                })
                ->with(['filestorage', 'universities.filestorage'])
                ->get();

            $relatedCourses = $relatedCourses->merge($similarCourses);
        }

        $relatedCourses = $relatedCourses->unique('id')->take(4);

        return response()->json([
            'message' => 'Corsi personalizzati per te recuperati con successo',
            'courses' => $relatedCourses
        ], 200);
    }


    public function personalizedGuidedProjects()
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Non autenticato'], 403);
        }

        $viewedCourseIds = View::where('user_id', $user->id)->pluck('course_id')->toArray();

        $viewedCourses = Course::whereIn('id', $viewedCourseIds)->get();

        $relatedGuidedProjects = collect();

        foreach ($viewedCourses as $course) {
            $similarGuidedProjects = Course::where('id', '!=', $course->id)
                ->where('productTypeDescription', 'guided_project')
                ->where(function($query) use ($course) {
                    $query->where('category_id', $course->category_id)
                        ->orWhere('language', $course->language)
                        ->orWhere('difficulty_level', $course->difficulty_level);
                })
                ->with(['filestorage', 'universities.filestorage'])
                ->get();

            $relatedGuidedProjects = $relatedGuidedProjects->merge($similarGuidedProjects);
        }

        $relatedGuidedProjects = $relatedGuidedProjects->unique('id')->take(4);

        return response()->json([
            'message' => 'Progetti guidati personalizzati per te recuperati con successo',
            'courses' => $relatedGuidedProjects
        ], 200);
    }


    public function TwoHoursCourses()
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Non autenticato'], 403);
        }

        $courses = Course::where('duration', '<=', 2)
            ->where('duration_unit', 'hours')
            ->with(['filestorage', 'universities.filestorage'])
            ->take(4)
            ->get();

        return response()->json([
            'message' => 'Corsi con durata inferiore o uguale a 2 ore recuperati con successo',
            'courses' => $courses
        ], 200);
    }
}