<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileChallengeCompletion extends Model
{
    use HasFactory;

    public function profile(){
        return $this->belongsTo(Profile::class);
    }

    public function challengeWeapon(){
        return $this->belongsTo(ChallengeWeapon::class, 'challenge_weapons_id');
        // Example for the future of not being dumb with naming
    }
}
