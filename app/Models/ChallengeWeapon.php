<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChallengeWeapon extends Model
{
    use HasFactory;

    public function profileChallengeCompletions(){
        return $this->belongsTo(ProfileChallengeCompletion::class);
    }

}
