<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'course_skills')
                    ->withTimestamps();
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_skills')
                    ->withTimestamps();
    }

    public function course_skill()
    {
        return $this->hasMany(CourseSkill::class, 'id','skill_id');
    }

    public function user_skill()
    {
        return $this->hasMany(SkillUser::class, 'id','skill_id');
    }
}
