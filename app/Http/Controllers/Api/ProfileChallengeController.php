<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProfileChallengeCompletion;
use Illuminate\Http\Request;

class ProfileChallengeController extends Controller
{
    public function index($profile_id)
    {
        $profilechallengecompletion = ProfileChallengeCompletion::
        where("profile_id", $profile_id)
        ->with("challengeWeapon", "challengeWeapon.challenge", "challengeWeapon.weapon", "profile", "profile.profileToken", "profile.user")
        ->orderBy('id')
        ->get();

        return $profilechallengecompletion;
    }

    public function post()
    {
        print_r($_POST);
        die;
    }

    
}
