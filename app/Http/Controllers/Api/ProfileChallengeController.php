<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProfileChallengeCompletion;
use Illuminate\Http\Request;

class ProfileChallengeController extends Controller
{
    public function index()
    {
        $profilechallengecompletion = ProfileChallengeCompletion::orderBy('id')->get();

        return $profilechallengecompletion;
    }

    public function post()
    {
        print_r($_POST);
        die;
    }

    
}
