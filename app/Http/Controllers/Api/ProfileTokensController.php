<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Models\ProfileToken;
use Illuminate\Http\Request;

class ProfileTokensController extends Controller
{
    public function index()
    {

        $profiletokens = ProfileToken::orderBy('id')->get();

        return $profiletokens;
    }

    public function generate()
    {
        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
        $result = '';

        for ($i = 0; $i < 36; $i++) {
            $randomIndex = rand(0, strlen($characters) - 1);
            $result .= $characters[$randomIndex];
        }

        return $result;
    }

    public function validateToken(Request $request)
    {
        $personalProfileToken = $request->input('profile_token_id');

        $isInDB = null;

        if ($personalProfileToken) {
            $isInDB = ProfileToken::find($personalProfileToken);
            
            if ($isInDB) {
                return $isInDB;
            } 

        } else {
            $personalProfileToken = $this->generate();
            $newToken = new ProfileToken;
            $newToken->token = $personalProfileToken;
            $newToken->save();
            return $newToken;
        }
        
        return null;
    }
}
