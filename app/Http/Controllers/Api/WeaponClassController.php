<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\WeaponClass;
use Illuminate\Http\Request;

class WeaponClassController extends Controller
{
    public function index()
    {
        $weaponclasses = WeaponClass::with("weapons.challenges")->orderBy('id')->get();

        return $weaponclasses;
    }
}
