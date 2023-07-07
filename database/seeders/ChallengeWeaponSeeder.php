<?php

namespace Database\Seeders;

use App\Models\Challenge;
use App\Models\Weapon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChallengeWeaponSeeder extends Seeder
{
    public function run(): void
    {

        DB::table('challenge_weapon')->truncate();

        
        $challengeweapon = [
            // AR -> M4 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 1,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 1,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 1,
            ],
            [
                'challenge_id' => 33,
                'weapon_id' => 1,
            ],
            // AR -> M4 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 1,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 1,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 1,
            ],
            // AR -> TAQ-56 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 2,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 2,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 2,
            ],
            [
                'challenge_id' => 24,
                'weapon_id' => 2,
            ],
            // AR -> TAQ-56 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 2,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 2,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 2,
            ],
        ];

        foreach ($challengeweapon as $cw) {
            $challenge = Challenge::find($cw['challenge_id']);
            $weapon = Weapon::find($cw['weapon_id']);

            $challenge->weapons()->attach($weapon->id);
        }
    }
}