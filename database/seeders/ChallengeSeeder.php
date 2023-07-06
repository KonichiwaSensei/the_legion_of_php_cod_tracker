<?php

namespace Database\Seeders;

use App\Models\Challenge;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChallengeSeeder extends Seeder
{
    public function run(): void
    {

        DB::table('challenges')->truncate();

        $challenges = [
            // Kill Challenges:
            [
                'text' => '50 Kills',
                'max_value' => 50,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '40 Kills',
                'max_value' => 40,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '30 Kills',
                'max_value' => 30,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // ADS Kill Challenges:
            [
                'text' => '50 ADS Kills',
                'max_value' => 50,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '40 ADS Kills',
                'max_value' => 40,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '30 ADS Kills',
                'max_value' => 30,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '25 ADS Kills',
                'max_value' => 25,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '15 ADS Kills',
                'max_value' => 15,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // Mounted Kill Challenges:
            [
                'text' => '40 Mounted Kills',
                'max_value' => 40,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '20 Mounted Kills',
                'max_value' => 20,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '15 Mounted Kills',
                'max_value' => 15,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '10 Mounted Kills',
                'max_value' => 10,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // Suppressor Kill Challenges:
            [
                'text' => '50 Suppressor Kills',
                'max_value' => 50,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '40 Suppressor Kills',
                'max_value' => 40,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '30 Suppressor Kills',
                'max_value' => 30,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // Double Kill Challenges:
            [
                'text' => '15 Double Kills',
                'max_value' => 15,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '10 Double Kills',
                'max_value' => 10,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '5 Double Kills',
                'max_value' => 5,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // Point-Blank Kill Challenges:
            [
                'text' => '30 Point-Blank Kills',
                'max_value' => 30,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '20 Point-Blank Kills',
                'max_value' => 20,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '15 Point-Blank Kills',
                'max_value' => 15,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '10 Point-Blank Kills',
                'max_value' => 10,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // Hipfire Kill Challenges:
            [
                'text' => '20 Hipfire Kills',
                'max_value' => 20,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '15 Hipfire Kills',
                'max_value' => 15,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '10 Hipfire Kills',
                'max_value' => 10,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '5 Hipfire Kills',
                'max_value' => 5,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // Crouch Kill Challenges:
            [
                'text' => '30 Crouch Kills',
                'max_value' => 30,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '25 Crouch Kills',
                'max_value' => 25,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // Prone Kill Challenges:
            [
                'text' => '30 Prone Kills',
                'max_value' => 30,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '25 Prone Kills',
                'max_value' => 25,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '20 Prone Kills',
                'max_value' => 20,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // Behind Kill Challenges:
            [
                'text' => '20 Behind Kills',
                'max_value' => 20,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '15 Behind Kills',
                'max_value' => 15,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '10 Behind Kills',
                'max_value' => 10,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // One Shot Kill Challenges:
            [
                'text' => '40 One Shot Kills',
                'max_value' => 40,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '30 One Shot Kills',
                'max_value' => 30,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '25 One Shot Kills',
                'max_value' => 25,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '20 One Shot Kills',
                'max_value' => 20,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // "2 Kills in 10s" Kill Challenges:
            [
                'text' => '20 "2 Kills in 10s"',
                'max_value' => 20,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '10 "2 Kills in 10s"',
                'max_value' => 10,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // Focused Kill Challenges:
            [
                'text' => '40 Focused Kills',
                'max_value' => 40,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // Akimbo Kill Challenges:
            [
                'text' => '40 Kills with Akimbo',
                'max_value' => 40,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            [
                'text' => '30 Kills with Akimbo',
                'max_value' => 30,
                'is_mastery' => false,
                'mastery_text' => null,
            ],
            // GOLD MASTERY Challenges:
            [
                'text' => '10 "3 Streaks"',
                'max_value' => 10,
                'is_mastery' => true,
                'mastery_text' => "Gold",
            ],
            [
                'text' => '5 "3 Streaks"',
                'max_value' => 5,
                'is_mastery' => true,
                'mastery_text' => "Gold",
            ],
            [
                'text' => '10 "2 Streaks"',
                'max_value' => 10,
                'is_mastery' => true,
                'mastery_text' => "Gold",
            ],
            [
                'text' => '5 "2 Streaks"',
                'max_value' => 5,
                'is_mastery' => true,
                'mastery_text' => "Gold",
            ],
            // PLATINUM MASTERY Challenges:
            [
                'text' => '25 Longshots',
                'max_value' => 25,
                'is_mastery' => true,
                'mastery_text' => "Platinum",
            ],
            [
                'text' => '20 Longshots',
                'max_value' => 20,
                'is_mastery' => true,
                'mastery_text' => "Platinum",
            ],
            [
                'text' => '15 Longshots',
                'max_value' => 15,
                'is_mastery' => true,
                'mastery_text' => "Platinum",
            ],
            [
                'text' => '25 Destroys',
                'max_value' => 25,
                'is_mastery' => true,
                'mastery_text' => "Platinum",
            ],
            [
                'text' => '15 Destroys',
                'max_value' => 15,
                'is_mastery' => true,
                'mastery_text' => "Platinum",
            ],
            [
                'text' => '10 Destroys',
                'max_value' => 10,
                'is_mastery' => true,
                'mastery_text' => "Platinum",
            ],
            [
                'text' => '10 "2 Kills in 10s"',
                'max_value' => 10,
                'is_mastery' => true,
                'mastery_text' => "Platinum",
            ],
            // POLYATOMIC MASTERY Challenges:
            [
                'text' => '25 Headshots',
                'max_value' => 25,
                'is_mastery' => true,
                'mastery_text' => "Polyatomic",
            ],
            [
                'text' => '20 Headshots',
                'max_value' => 20,
                'is_mastery' => true,
                'mastery_text' => "Polyatomic",
            ],
            [
                'text' => '15 Double Kills',
                'max_value' => 15,
                'is_mastery' => true,
                'mastery_text' => "Polyatomic",
            ],
            [
                'text' => '20 Behind Kills',
                'max_value' => 20,
                'is_mastery' => true,
                'mastery_text' => "Polyatomic",
            ],
            [
                'text' => '10 Behind Kills',
                'max_value' => 10,
                'is_mastery' => true,
                'mastery_text' => "Polyatomic",
            ],
        ];

        foreach ($challenges as $challenge) {
            Challenge::create($challenge);
        }
    }
}
