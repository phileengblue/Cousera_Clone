<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use App\Models\Course;
use App\Models\SkillUser;
use App\Models\CourseSkill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SkillController extends Controller
{
    public function addSkillUser(Request $request)
    {
        $user = Auth::user();
        $addedSkills = [];
        $existingSkills = [];

        foreach ($request->skills as $skillData) {
            // Cerca la competenza per nome
            $skill = Skill::firstOrCreate(['name' => $skillData['name']]);

            // Controlla se l'associazione esiste già
            $existingAssociation = SkillUser::where('user_id', $user->id)
                                            ->where('skill_id', $skill->id)
                                            ->first();

            if (!$existingAssociation) {
                // Crea l'associazione utente-competenza
                SkillUser::create([
                    'user_id' => $user->id,
                    'skill_id' => $skill->id,
                ]);
                $addedSkills[] = $skill;
            } else {
                $existingSkills[] = $skill;
            }
        }

        if (count($addedSkills) > 0) {
            return response()->json([
                'message' => 'Competenze aggiunte con successo.',
                'addedSkills' => $addedSkills
            ], 200);
        } else {
            return response()->json([
                'message' => 'Le competenze sono già associate all\'utente.',
                'existingSkills' => $existingSkills
            ], 400);
        }
    }

    public function addSkillCourse(Request $request, $id)
    {
        $user = auth()->user();
        $addedSkills = [];
        $existingSkills = [];
        
        if($user->hasRole('superadmin')){
            $course = Course::findOrFail($id);

            foreach ($request->skills as $skillData) {
                // Cerca la competenza per nome
                $skill = Skill::firstOrCreate(['name' => $skillData['name']]);
    
                // Controlla se l'associazione esiste già
                $existingAssociation = CourseSkill::where('course_id', $course->id)
                                                ->where('skill_id', $skill->id)
                                                ->first();
    
                if (!$existingAssociation) {
                    // Crea l'associazione corso-competenza
                    CourseSkill::create([
                        'course_id' => $course->id,
                        'skill_id' => $skill->id,
                    ]);
                    $addedSkills[] = $skill;
                } else {
                    $existingSkills[] = $skill;
                }
            }
    
            if (count($addedSkills) > 0) {
                return response()->json([
                    'message' => 'Competenze aggiunte con successo.',
                    'addedSkills' => $addedSkills
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Le competenze sono già associate al corso.',
                    'existingSkills' => $existingSkills
                ], 400);
            }
        } else {
            return response()->json(['message' => 'Utente non autorizzato'], 401);
        }
    }

    public function updateUserSkill(Request $request, $id)
    {
        $skill = Skill::find($id);

        if (!$skill) {
            return response()->json([
                'message' => 'Skill non trovata.'
            ], 404);
        }

        $this->validate($request, [
            'name' => 'required|string|max:255',
        ]);

        $skill->update([
            'name' => $request->name
        ]);

        return response()->json([
            'message' => 'Skill aggiornata con successo.',
            'skill' => $skill
        ], 200);
    }

    public function deleteUserSkill($id)
    {
        $skill = Skill::find($id);

        if (!$skill) {
            return response()->json([
                'message' => 'Skill non trovata.'
            ], 404);
        }

        $skill->delete();

        return response()->json([
            'message' => 'Skill eliminata con successo.'
        ], 200);
    }
}