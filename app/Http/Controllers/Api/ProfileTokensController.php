<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Models\ProfileToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileTokensController extends Controller
{
    public function index()
    {

        $profiletokens = ProfileToken::orderBy('id')->with("profile")->get();

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

            $newProfile = new Profile;
            $newProfile->profile_token_id = $newToken->id;
            $newProfile->orion_challenge_complete = 0;
            $newProfile->save();


            return $newToken;
        }

        return null;
    }

    public function token_set(Request $request)
    {
        $tokenLocal = $request->input('token');
        
        // $tokenOfUser = ProfileToken::orderBy('id')->with("profile");
        $profile = Profile::where('user_id', Auth::id())->with("profileToken")->orderBy('id')->first();

        // dd($profile);

        $findingObsoleteToken = ProfileToken::where("token", $tokenLocal)->with("profile")->first();

        // dd($findingObsoleteToken);

        if ($profile && $profile->profileToken) {
            if ($findingObsoleteToken && $profile->profileToken->id !== $findingObsoleteToken->id) {
                $findingObsoleteToken->profile->delete();
                $findingObsoleteToken->delete();
            }
            return [
                "id" => $profile->profileToken->id,
                "token" => $profile->profileToken->token
            ];
        } else {
            if ($findingObsoleteToken && $findingObsoleteToken->profile) {
                $findingObsoleteToken->profile->user_id = Auth::id();
                $findingObsoleteToken->profile->save();
                return [
                    "id" => $findingObsoleteToken->id,
                    "token" => $findingObsoleteToken->token
                ];
            } else {
                return [
                    "id" => $findingObsoleteToken->id,
                    "token" => $findingObsoleteToken->token
                ];
            }
        }
    }
}
