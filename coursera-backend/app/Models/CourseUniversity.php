<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseUniversity extends Model
{
    use HasFactory;

    protected $fillable = ['university_id', 'course_id'];

    public function universities()
    {
        return $this->belongsTo(University::class, 'university_id','id');
    }

    public function courses()
    {
        return $this->belongsTo(Course::class, 'course_id','id');
    }
}
