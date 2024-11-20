<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'filestorage_id'
    ];

    public function filestorage()
    {
        return $this->belongsTo(FileStorage::class, 'filestorage_id', 'id');
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'course_universities')
                    ->withTimestamps();
    }

    public function course_university()
    {
        return $this->hasMany(CourseUniversity::class, 'id','university_id');
    }
}
