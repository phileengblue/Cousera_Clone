<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkillUser extends Model
{
    use HasFactory;

    protected $table = 'user_skills';
    protected $fillable = [
        'user_id',
        'skill_id'
    ];

    public function skills()
    {
        return $this->belongsTo(Skill::class, 'skill_id','id');
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id','id');
    }
}
