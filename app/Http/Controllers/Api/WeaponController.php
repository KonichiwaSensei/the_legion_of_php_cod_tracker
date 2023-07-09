<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Challenge;
use App\Models\Weapon;
use Illuminate\Http\Request;

class WeaponController extends Controller
{
    public function index()
    {
        $weapons = Weapon::with("challenges")->orderBy('id')->get();

        return $weapons;
    }
}
