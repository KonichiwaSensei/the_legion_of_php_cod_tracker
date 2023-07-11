<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Models\ProfileChallengeCompletion;
use App\Models\ProfileToken;
use Illuminate\Http\Request;

class ProfileChallengeController extends Controller
{
    public function index($profile_token_id)
    {
        $profile_token = ProfileToken::find($profile_token_id);
        $profile_id = $profile_token->profile->id;

        $profilechallengecompletion = ProfileChallengeCompletion::where("profile_id", $profile_id)
            ->with("challengeWeapon", "challengeWeapon.challenge", "challengeWeapon.weapon", "profile", "profile.profileToken", "profile.user")
            ->orderBy('id')
            ->get();

        return $profilechallengecompletion;
    }

    public function store(Request $request)
    {
        // $ischallengecomplete = ProfileChallengeCompletion::find($request->input('challenge_id'));

        
        $profile_token_id = $request->input('profile_token_id');
        $profile_token = ProfileToken::find($profile_token_id); // not for different columns than ID, uses PrimaryKey
        // $profile_token = ProfileToken::where('id',$profile_token_id)->first(); // same as above
        $profile_id = $profile_token->profile->id;
        
        $ischallengecomplete = ProfileChallengeCompletion::where('profile_id', $profile_id)
            ->where('challenge_weapons_id', $request->input('challenge_weapon_id'))
            ->first();
        
        if ($ischallengecomplete) {

            $ischallengecomplete->challenge_progress = $request->input('challenge_progress');
            $ischallengecomplete->challenge_complete = $request->input('challenge_complete');
        } else {
            $ischallengecomplete = new ProfileChallengeCompletion;

            $ischallengecomplete->profile_id = $profile_id;
            $ischallengecomplete->challenge_weapons_id = $request->input('challenge_weapon_id');
            $ischallengecomplete->challenge_progress = $request->input('challenge_progress');
            $ischallengecomplete->challenge_complete = $request->input('challenge_complete');
        }
        
        $ischallengecomplete->save();

        return 'Stored';
    }
}
