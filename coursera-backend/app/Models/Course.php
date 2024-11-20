<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'language',
        'productTypeDescription',
        'difficulty_level',
        'duration',
        'duration_unit',
        'price',
        'start_date',
        'parent_id',
        'filestorage_id',
        'category_id'
    ];

    public function filestorage(){

        return $this->belongsTo(Filestorage::class, 'filestorage_id','id');
    }

    public function categories(){

        return $this->belongsTo(Category::class, 'category_id','id');
    }

    public function reviews(){

        return $this->hasMany(Review::class, 'id','course_id');
    }

    public function views(){

        return $this->hasMany(View::class, 'id','course_id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'course_users')
                    ->withPivot('is_professor')
                    ->withTimestamps();
    }

    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'course_skills')
                    ->withTimestamps();
    }

    public function universities()
    {
        return $this->belongsToMany(University::class, 'course_universities')
                    ->withTimestamps();
    }

    public function course_users()
    {
        return $this->hasMany(CourseUser::class, 'id','course_id');
    }
    
    public function course_skill()
    {
        return $this->hasMany(CourseSkill::class, 'id','course_id');
    }

    public function course_university()
    {
        return $this->hasMany(CourseUniversity::class, 'id','university_id');
    }
}
