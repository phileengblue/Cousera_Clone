<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filestorage extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'name',
        'extension',
        'type'
    ];

    protected $table = 'filestorage';

    public function users(){
        
        return $this->hasMany(User::class, 'filestorage_id','id');
    }

    public function categories()
    {
        return $this->hasOne(Category::class, 'filestorage_id', 'id');
    }

    public function courses(){
        
        return $this->hasMany(Course::class, 'filestorage_id','id');
    }

    public function universities()
    {
        return $this->hasOne(University::class, 'id', 'filestorage_id');
    }
}
