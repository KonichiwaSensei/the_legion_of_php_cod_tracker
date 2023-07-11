<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Challenge extends Model
{
    use HasFactory;

    public function weapons()
    {
        return $this->belongsToMany(Weapon::class);
    }

    public function challengeWeapon()
    {
        return $this->belongsTo(ChallengeWeapon::class);
    }

}
