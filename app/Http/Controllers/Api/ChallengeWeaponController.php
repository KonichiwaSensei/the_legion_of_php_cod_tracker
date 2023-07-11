<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ChallengeWeapon;
use Illuminate\Http\Request;

class ChallengeWeaponController extends Controller
{
    public function index()
    {
        $challengeweapon = ChallengeWeapon::orderBy('id')->get();

        return $challengeweapon;
    }
}
