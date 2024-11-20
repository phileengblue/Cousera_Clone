<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;

    public function achievements(){

        return $this->belongsTo(Achievement::class, 'achievement_id','id');
    }

    public function users(){

        return $this->belongsTo(User::class, 'user_id','id');
    }
}
