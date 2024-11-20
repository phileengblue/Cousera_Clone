<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseSkill extends Model
{
    use HasFactory;

    protected $table = 'course_skills';
    protected $fillable = [
        'course_id',
        'skill_id'
    ];

    public function skills()
    {
        return $this->belongsTo(Skill::class, 'skill_id','id');
    }

    public function courses()
    {
        return $this->belongsTo(Course::class, 'course_id','id');
    }
}
