<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChallengeWeaponSeeder extends Seeder
{
    public function run(): void
    {

        DB::table('challenge_weapon')->truncate();
        
        $challengeweapon = [
        ];
    }
}