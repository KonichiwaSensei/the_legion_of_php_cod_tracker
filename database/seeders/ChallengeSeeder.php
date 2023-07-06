<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChallengeSeeder extends Seeder
{
    public function run(): void
    {

        DB::table('challenges')->truncate();

        $challenges = [
            [
                'text' => 'challenge text',
                'max_value' => 25,
                'is_mastery' => false,
                'master_text' => null,
            ],

        ];

        foreach ($challenges as $challenge) {
            Weapon::create($challenge);
        }
    }
}
