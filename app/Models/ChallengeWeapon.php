<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChallengeWeapon extends Model
{
    use HasFactory;
    protected $table = 'challenge_weapon';

    public function profileChallengeCompletion(){
        return $this->belongsTo(ProfileChallengeCompletion::class);
    }

    public function weapon(){
        return $this->belongsTo(Weapon::class);
    }

    public function challenge(){
        return $this->belongsTo(Challenge::class);
    }
}
