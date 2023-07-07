<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProfileToken;
use Illuminate\Http\Request;

class ProfileTokensController extends Controller
{
    public function index(){

        $profiletokens = ProfileToken::orderBy('id')->get();

        return $profiletokens;
        
    }
}
