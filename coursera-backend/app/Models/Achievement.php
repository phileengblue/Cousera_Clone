<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'category_id'
    ];

    public function categories()
    {
        return $this->belongsTo(Category::class, 'category_id','id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'certificates')
                    ->withTimestamps();
    }

    public function certificates(){

        return $this->hasMany(Certificate::class, 'id','achievement_id');
    }
}
