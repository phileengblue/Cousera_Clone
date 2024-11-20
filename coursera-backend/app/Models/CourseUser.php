<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseUser extends Model
{
    use HasFactory;

    protected $table = 'course_users';


    protected $fillable = [
        'user_id',
        'course_id',
        'is_professor'
    ];

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id','id');
    }

    public function courses()
    {
        return $this->belongsTo(Course::class, 'course_id','id');
    }
}
