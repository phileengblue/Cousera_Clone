<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'alias',
        'filestorage_id',
        'parent_id'
    ];

    /**
     * Get the parent category.
     */
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    /**
     * Get the child categories.
     */
    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    /**
     * Get the filestorage associated with the category.
     */
    public function filestorage()
    {
        return $this->belongsTo(FileStorage::class, 'filestorage_id', 'id');
    }

    public function achievements()
    {
        return $this->hasMany(Achievement::class, 'category_id','id');
    }

    public function courses()
    {
        return $this->hasMany(Course::class, 'category_id','id');
    }
}
