<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\CourseUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function addReview($course_id, Request $request)
    {
        $user = Auth::user();
        $existingAssociation = CourseUser::where('user_id', $user->id)->where('course_id', $course_id)->first();
        $existingReview = Review::where('course_id', $course_id)->where('user_id', $user->id)->first();

        if($existingAssociation){
            if(!$existingReview) {
                Review::create([
                    "comment" => $request->comment,
                    "vote" => $request->vote,
                    "user_id" => $user->id,
                    "course_id" => $course_id
                ]);
    
                return response()->json(['message' => 'Recensione creata']);
            } else {
                return response()->json(['message' => 'Impossibile effettuare la recensione/Recensione già effettuata']);
            }
        } else { return response()->json(['message' => 'Per effettuare una recensione devi essere iscritto al corso.']);

        }
    }

    public function updateReview($course_id, Request $request)
    {
        $user = Auth::user();
        $existingReview = Review::where('course_id', $course_id)->where('user_id', $user->id)->first();
        if($existingReview){
            $existingReview->update([
                "comment" => $request->comment,
                "vote" => $request->vote,
            ]);

            return response()->json(['message' => 'Recensione modificata con successo']);
        } else return response()->json(['message' => 'Recensione inesistente']);
    }

    public function deleteReview($course_id)
    {
        $user = Auth::user();
        $existingReview = Review::where('course_id', $course_id)->where('user_id', $user->id)->first();
        if($existingReview){
            $existingReview->delete();

            return response()->json(['message' => 'Recensione eliminata con successo.']);
        } else return response()->json(['message' => 'Recensione inesistente']);
    }
}
