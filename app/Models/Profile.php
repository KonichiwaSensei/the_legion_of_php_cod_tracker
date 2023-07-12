<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    public function profileToken(){
        return $this->belongsTo(ProfileToken::class);
    }

    public function profileChallengeCompletions(){
        return $this->hasMany(ProfileChallengeCompletion::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
    
}
