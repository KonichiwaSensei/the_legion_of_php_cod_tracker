<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    public function profiletokens(){
        return $this->hasOne(ProfileToken::class);
    }

    public function profilechallengecompletions(){
        return $this->hasMany(ProfileChallengeCompletion::class);
    }
}
