<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Weapon extends Model
{
    use HasFactory;

    public function weaponClass()
    {
        return $this->belongsTo(WeaponClass::class);
    }

    public function challenges(){
        return $this->belongsToMany(Challenge::class)->withPivot('id');
    }

    public function challengeWeapon()
    {
        return $this->belongsTo(ChallengeWeapon::class);
    }
}
