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
            // Assault Rifles
            // AR -> M4 weapon_id:1 (Basic)
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
            // AR -> M4 weapon_id:1 (Mastery)
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

            // AR -> TAQ-56 weapon_id:2 (Basic)
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
            // AR -> TAQ-56 weapon_id:2 (Mastery)
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

            // AR -> Kastov 762 weapon_id:3 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 3,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 3,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 3,
            ],
            [
                'challenge_id' => 33,
                'weapon_id' => 3,
            ],
            // AR -> Kastov 762 weapon_id:3 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 3,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 3,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 3,
            ],

            // AR -> Lachmann-556 weapon_id:4 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 4,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 4,
            ],
            [
                'challenge_id' => 13,
                'weapon_id' => 4,
            ],
            [
                'challenge_id' => 25,
                'weapon_id' => 4,
            ],
            // AR -> Lachmann-556 weapon_id:4 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 4,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 4,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 4,
            ],

            // AR -> STB 556 weapon_id:5 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 5,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 5,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 5,
            ],
            [
                'challenge_id' => 27,
                'weapon_id' => 5,
            ],
            // AR -> STB 556 weapon_id:5 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 5,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 5,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 5,
            ],

            // AR -> M16 weapon_id:6 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 6,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 6,
            ],
            [
                'challenge_id' => 27,
                'weapon_id' => 6,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 6,
            ],
            // AR -> M16 weapon_id:6 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 6,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 6,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 6,
            ],

            // AR -> Kastov-74u weapon_id:7 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 7,
            ],
            [
                'challenge_id' => 8,
                'weapon_id' => 7,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 7,
            ],
            [
                'challenge_id' => 27,
                'weapon_id' => 7,
            ],
            // AR -> Kastov-74u weapon_id:7 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 7,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 7,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 7,
            ],

            // AR -> Kastov 545 weapon_id:8 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 8,
            ],
            [
                'challenge_id' => 25,
                'weapon_id' => 8,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 8,
            ],
            [
                'challenge_id' => 13,
                'weapon_id' => 8,
            ],
            // AR -> Kastov 545 weapon_id:8 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 8,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 8,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 8,
            ],

            // AR -> M13B weapon_id:9 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 9,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 9,
            ],
            [
                'challenge_id' => 21,
                'weapon_id' => 9,
            ],
            [
                'challenge_id' => 33,
                'weapon_id' => 9,
            ],
            // AR -> M13B weapon_id:9 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 9,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 9,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 9,
            ],

            // AR -> Chimera weapon_id:10 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 10,
            ],
            [
                'challenge_id' => 23,
                'weapon_id' => 10,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 10,
            ],
            [
                'challenge_id' => 33,
                'weapon_id' => 10,
            ],
            // AR -> Chimera weapon_id:10 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 10,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 10,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 10,
            ],

            // AR -> ISO Hemlock weapon_id:11 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 11,
            ],
            [
                'challenge_id' => 5,
                'weapon_id' => 11,
            ],
            [
                'challenge_id' => 33,
                'weapon_id' => 11,
            ],
            [
                'challenge_id' => 14,
                'weapon_id' => 11,
            ],
            // AR -> ISO Hemlock weapon_id:11 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 11,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 11,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 11,
            ],

            // AR -> Tempus Razorback weapon_id:12 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 12,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 12,
            ],
            [
                'challenge_id' => 5,
                'weapon_id' => 12,
            ],
            [
                'challenge_id' => 16,
                'weapon_id' => 12,
            ],
            // AR -> Tempus Razorback weapon_id:12 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 12,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 12,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 12,
            ],

            // Battle Rifles
            // BR -> Lachmann-762 weapon_id:13 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 13,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 13,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 13,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 13,
            ],
            // BR -> Lachmann-762 weapon_id:13 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 13,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 13,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 13,
            ],

            // BR -> SO-14 weapon_id:14 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 14,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 14,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 14,
            ],
            [
                'challenge_id' => 29,
                'weapon_id' => 14,
            ],
            // BR -> SO-14 weapon_id:14 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 14,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 14,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 14,
            ],

            // BR -> TAQ-V weapon_id:15 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 15,
            ],
            [
                'challenge_id' => 21,
                'weapon_id' => 15,
            ],
            [
                'challenge_id' => 32,
                'weapon_id' => 15,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 15,
            ],
            // BR -> TAQ-V weapon_id:15 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 15,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 15,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 15,
            ],

            // BR -> FTac Recon weapon_id:16 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 16,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 16,
            ],
            [
                'challenge_id' => 13,
                'weapon_id' => 16,
            ],
            [
                'challenge_id' => 27,
                'weapon_id' => 16,
            ],
            // BR -> FTac Recon weapon_id:16 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 16,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 16,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 16,
            ],

            // BR -> Cronen Squall weapon_id:17 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 17,
            ],
            [
                'challenge_id' => 16,
                'weapon_id' => 17,
            ],
            [
                'challenge_id' => 32,
                'weapon_id' => 17,
            ],
            [
                'challenge_id' => 9,
                'weapon_id' => 17,
            ],
            // BR -> Cronen Squall weapon_id:17 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 17,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 17,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 17,
            ],

            // Submachine Guns
            // SMG -> Vel46 weapon_id:18 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 18,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 18,
            ],
            [
                'challenge_id' => 24,
                'weapon_id' => 18,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 18,
            ],
            // SMG -> Vel46 weapon_id:18 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 18,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 18,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 18,
            ],

            // SMG -> MX9 weapon_id:19 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 19,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 19,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 19,
            ],
            [
                'challenge_id' => 27,
                'weapon_id' => 19,
            ],
            // SMG -> MX9 weapon_id:19 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 19,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 19,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 19,
            ],

            // SMG -> Lachmann Sub weapon_id:20 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 20,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 20,
            ],
            [
                'challenge_id' => 13,
                'weapon_id' => 20,
            ],
            [
                'challenge_id' => 25,
                'weapon_id' => 20,
            ],
            // SMG -> Lachmann Sub weapon_id:20 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 20,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 20,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 20,
            ],

            // SMG -> Vaznev-9K weapon_id:21 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 21,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 21,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 21,
            ],
            [
                'challenge_id' => 24,
                'weapon_id' => 21,
            ],
            // SMG -> Vaznev-9K weapon_id:21 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 21,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 21,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 21,
            ],

            // SMG -> FSS Hurricane weapon_id:22 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 22,
            ],
            [
                'challenge_id' => 13,
                'weapon_id' => 22,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 22,
            ],
            [
                'challenge_id' => 29,
                'weapon_id' => 22,
            ],
            // SMG -> FSS Hurricane weapon_id:22 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 22,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 22,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 22,
            ],

            // SMG -> Minibak weapon_id:23 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 23,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 23,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 23,
            ],
            [
                'challenge_id' => 21,
                'weapon_id' => 23,
            ],
            // SMG -> Minibak weapon_id:23 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 23,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 23,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 23,
            ],

            // SMG -> PDSW 528 weapon_id:24 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 24,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 24,
            ],
            [
                'challenge_id' => 24,
                'weapon_id' => 24,
            ],
            [
                'challenge_id' => 22,
                'weapon_id' => 24,
            ],
            // SMG -> PDSW 528 weapon_id:24 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 24,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 24,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 24,
            ],

            // SMG -> Fennec 45 weapon_id:25 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 25,
            ],
            [
                'challenge_id' => 27,
                'weapon_id' => 25,
            ],
            [
                'challenge_id' => 33,
                'weapon_id' => 25,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 25,
            ],
            // SMG -> Fennec 45 weapon_id:25 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 25,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 25,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 25,
            ],

            // SMG -> BAS-P weapon_id:26 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 26,
            ],
            [
                'challenge_id' => 24,
                'weapon_id' => 26,
            ],
            [
                'challenge_id' => 33,
                'weapon_id' => 26,
            ],
            [
                'challenge_id' => 13,
                'weapon_id' => 26,
            ],
            // SMG -> BAS-P weapon_id:26 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 26,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 26,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 26,
            ],

            // SMG -> ISO 45 weapon_id:27 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 27,
            ],
            [
                'challenge_id' => 5,
                'weapon_id' => 27,
            ],
            [
                'challenge_id' => 19,
                'weapon_id' => 27,
            ],
            [
                'challenge_id' => 32,
                'weapon_id' => 27,
            ],
            // SMG -> ISO 45 weapon_id:27 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 27,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 27,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 27,
            ],

            // Shotguns
            // Shotgun -> 28. Lockwood 300 weapon_id:28 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 28,
            ],
            [
                'challenge_id' => 14,
                'weapon_id' => 28,
            ],
            [
                'challenge_id' => 37,
                'weapon_id' => 28,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 28,
            ],
            // Shotgun -> 28. Lockwood 300 weapon_id:28 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 28,
            ],
            [
                'challenge_id' => 49,
                'weapon_id' => 28,
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 28,
            ],

            // Shotgun -> Expedite 12 weapon_id:29 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 29,
            ],
            [
                'challenge_id' => 24,
                'weapon_id' => 29,
            ],
            [
                'challenge_id' => 30,
                'weapon_id' => 29,
            ],
            [
                'challenge_id' => 6,
                'weapon_id' => 29,
            ],
            // Shotgun -> Expedite 12 weapon_id:29 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 29,
            ],
            [
                'challenge_id' => 49,
                'weapon_id' => 29
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 29,
            ],

            // Shotgun -> Bryson 800 weapon_id:30 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 30,
            ],
            [
                'challenge_id' => 24,
                'weapon_id' => 30,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 30,
            ],
            [
                'challenge_id' => 38,
                'weapon_id' => 30,
            ],
            // Shotgun -> Bryson 800 weapon_id:30 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 30,
            ],
            [
                'challenge_id' => 49,
                'weapon_id' => 30,
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 30,
            ],

            // Shotgun -> Bryson 890 weapon_id:31 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 31,
            ],
            [
                'challenge_id' => 21,
                'weapon_id' => 31,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 31,
            ],
            [
                'challenge_id' => 28,
                'weapon_id' => 31,
            ],
            // Shotgun -> Bryson 890 weapon_id:31 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 31,
            ],
            [
                'challenge_id' => 49,
                'weapon_id' => 31,
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 31,
            ],

            // Shotgun -> KV Broadside weapon_id:32 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 32,
            ],
            [
                'challenge_id' => 20,
                'weapon_id' => 32,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 32,
            ],
            [
                'challenge_id' => 38,
                'weapon_id' => 32,
            ],
            // Shotgun -> KV Broadside weapon_id:32 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 32,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 32,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 32,
            ],

            // Light Machine Guns
            // LMG -> Sakin MG38 weapon_id:33 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 33,
            ],
            [
                'challenge_id' => 29,
                'weapon_id' => 33,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 33,
            ],
            [
                'challenge_id' => 13,
                'weapon_id' => 33,
            ],
            // LMG -> Sakin MG38 weapon_id:33 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 33,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 33,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 33,
            ],

            // LMG -> HCR 56 weapon_id:34 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 34,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 34,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 34,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 34,
            ],
            // LMG -> HCR 56 weapon_id:34 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 34,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 34,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 34,
            ],

            // LMG -> 556 Icarus weapon_id:35 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 35,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 35,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 35,
            ],
            [
                'challenge_id' => 27,
                'weapon_id' => 35,
            ],
            // LMG -> 556 Icarus weapon_id:35 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 35,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 35,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 35,
            ],

            // LMG -> RAAL MG weapon_id:36 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 36,
            ],
            [
                'challenge_id' => 33,
                'weapon_id' => 36,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 36,
            ],
            [
                'challenge_id' => 25,
                'weapon_id' => 36,
            ],
            // LMG -> RAAL MG weapon_id:36 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 36,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 36,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 36,
            ],

            // LMG -> RPK weapon_id:37 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 37,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 37,
            ],
            [
                'challenge_id' => 13,
                'weapon_id' => 37,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 37,
            ],
            // LMG -> RPK weapon_id:37 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 37,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 37,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 37,
            ],

            // LMG -> RAPP H weapon_id:38 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 38,
            ],
            [
                'challenge_id' => 22,
                'weapon_id' => 38,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 38,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 38,
            ],
            // LMG -> RAPP H weapon_id:38 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 38,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 38,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 38,
            ],

            //Marksman Rifles
            // Marksman Rifle -> EBR-14 weapon_id:39 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 39,
            ],
            [
                'challenge_id' => 27,
                'weapon_id' => 39,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 39,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 39,
            ],
            // Marksman Rifle -> EBR-14 weapon_id:39 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 39,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 39,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 39,
            ],

            // Marksman Rifle -> SP-R 208 weapon_id:40 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 40,
            ],
            [
                'challenge_id' => 4,
                'weapon_id' => 40,
            ],
            [
                'challenge_id' => 29,
                'weapon_id' => 40,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 40,
            ],
            // Marksman Rifle -> SP-R 208 weapon_id:40 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 40,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 40,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 40,
            ],

            // Marksman Rifle -> Lockwood MK2 weapon_id:41 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 41,
            ],
            [
                'challenge_id' => 33,
                'weapon_id' => 41,
            ],
            [
                'challenge_id' => 37,
                'weapon_id' => 41,
            ],
            [
                'challenge_id' => 22,
                'weapon_id' => 41,
            ],
            // Marksman Rifle -> Lockwood MK2 weapon_id:41 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 41,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 41,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 41,
            ],

            // Marksman Rifle -> LM-S weapon_id:42 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 42,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 42,
            ],
            [
                'challenge_id' => 38,
                'weapon_id' => 42,
            ],
            [
                'challenge_id' => 27,
                'weapon_id' => 42,
            ],
            // Marksman Rifle -> LM-S weapon_id:42 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 42,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 42,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 42,
            ],

            // Marksman Rifle -> SA-B 50 weapon_id:43 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 43,
            ],
            [
                'challenge_id' => 37,
                'weapon_id' => 43,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 43,
            ],
            [
                'challenge_id' => 12,
                'weapon_id' => 43,
            ],
            // Marksman Rifle -> SA-B 50 weapon_id:43 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 43,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 43,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 43,
            ],

            // Marksman Rifle -> TAQ-M weapon_id:44 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 44,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 44,
            ],
            [
                'challenge_id' => 26,
                'weapon_id' => 44,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 44,
            ],
            // Marksman Rifle -> TAQ-M weapon_id:44 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 44,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 44,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 44,
            ],

            // Marksman Rifle -> Crossbow weapon_id:45 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 45,
            ],
            [
                'challenge_id' => 18,
                'weapon_id' => 45,
            ],
            [
                'challenge_id' => 33,
                'weapon_id' => 45,
            ],
            [
                'challenge_id' => 31,
                'weapon_id' => 45,
            ],
            // Marksman Rifle -> Crossbow weapon_id:45 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 45,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 45,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 45,
            ],

            // Marksman Rifle -> Tempus Torrent weapon_id:46 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 46,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 46,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 46,
            ],
            [
                'challenge_id' => 14,
                'weapon_id' => 46,
            ],
            // Marksman Rifle -> Tempus Torrent weapon_id:46 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 46,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 46,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 46,
            ],

            //Sniper Rifles
            // Sniper Rifle -> MCPR-300 weapon_id:47 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 47,
            ],
            [
                'challenge_id' => 40,
                'weapon_id' => 47,
            ],
            [
                'challenge_id' => 29,
                'weapon_id' => 47,
            ],
            [
                'challenge_id' => 25,
                'weapon_id' => 47,
            ],
            // Sniper Rifle -> MCPR-300 weapon_id:47 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 47,
            ],
            [
                'challenge_id' => 49,
                'weapon_id' => 47,
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 47,
            ],

            // Sniper Rifle -> Signal 50 weapon_id:48 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 48,
            ],
            [
                'challenge_id' => 40,
                'weapon_id' => 48,
            ],
            [
                'challenge_id' => 29,
                'weapon_id' => 48,
            ],
            [
                'challenge_id' => 37,
                'weapon_id' => 48,
            ],
            // Sniper Rifle -> Signal 50 weapon_id:48 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 48,
            ],
            [
                'challenge_id' => 49,
                'weapon_id' => 48,
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 48,
            ],

            // Sniper Rifle -> LA-B 330 weapon_id:49 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 49,
            ],
            [
                'challenge_id' => 40,
                'weapon_id' => 49,
            ],
            [
                'challenge_id' => 37,
                'weapon_id' => 49,
            ],
            [
                'challenge_id' => 13,
                'weapon_id' => 49,
            ],
            // Sniper Rifle -> LA-B 330 weapon_id:49 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 49,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 49,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 49,
            ],

            // Sniper Rifle -> SP-X 80 weapon_id:50 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 50,
            ],
            [
                'challenge_id' => 10,
                'weapon_id' => 50,
            ],
            [
                'challenge_id' => 37,
                'weapon_id' => 50,
            ],
            [
                'challenge_id' => 13,
                'weapon_id' => 50,
            ],
            // Sniper Rifles -> SP-X 80 weapon_id:50 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 50,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 50,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 50,
            ],

            // Sniper Rifles -> Victus XMR weapon_id:51 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 51,
            ],
            [
                'challenge_id' => 36,
                'weapon_id' => 51,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 51,
            ],
            [
                'challenge_id' => 27,
                'weapon_id' => 51,
            ],
            // Sniper Rifles -> Victus XMR weapon_id:51 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 51,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 51,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 51,
            ],

            // Sniper Rifles -> FJX Imperium weapon_id:52 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 52,
            ],
            [
                'challenge_id' => 39,
                'weapon_id' => 52,
            ],
            [
                'challenge_id' => 41,
                'weapon_id' => 52,
            ],
            [
                'challenge_id' => 35,
                'weapon_id' => 52,
            ],
            // Sniper Rifles -> FJX Imperium weapon_id:52 (Mastery)
            [
                'challenge_id' => 44,
                'weapon_id' => 52,
            ],
            [
                'challenge_id' => 48,
                'weapon_id' => 52,
            ],
            [
                'challenge_id' => 55,
                'weapon_id' => 52,
            ],

            //Pistols
            // Pistol -> P890 weapon_id:53 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 53,
            ],
            [
                'challenge_id' => 14,
                'weapon_id' => 53,
            ],
            [
                'challenge_id' => 18,
                'weapon_id' => 53,
            ],
            [
                'challenge_id' => 22,
                'weapon_id' => 53,
            ],
            // Pistol -> P890 weapon_id:53 (Mastery)
            [
                'challenge_id' => 45,
                'weapon_id' => 53,
            ],
            [
                'challenge_id' => 50,
                'weapon_id' => 53,
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 53,
            ],

            // Pistol -> .50 GS weapon_id:54 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 54,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 54,
            ],
            [
                'challenge_id' => 11,
                'weapon_id' => 54,
            ],
            [
                'challenge_id' => 42,
                'weapon_id' => 54,
            ],
            // Pistol -> .50 GS weapon_id:54 (Mastery)
            [
                'challenge_id' => 45,
                'weapon_id' => 54,
            ],
            [
                'challenge_id' => 50,
                'weapon_id' => 54,
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 54,
            ],

            // Pistol -> X12 weapon_id:55 (Basic)
            [
                'challenge_id' => 3,
                'weapon_id' => 55,
            ],
            [
                'challenge_id' => 7,
                'weapon_id' => 55,
            ],
            [
                'challenge_id' => 25,
                'weapon_id' => 55,
            ],
            [
                'challenge_id' => 42,
                'weapon_id' => 55,
            ],
            // Pistol -> X12 weapon_id:55 (Mastery)
            [
                'challenge_id' => 45,
                'weapon_id' => 55,
            ],
            [
                'challenge_id' => 50,
                'weapon_id' => 55,
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 55,
            ],

            // Pistol -> Basilisk weapon_id:56 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 56,
            ],
            [
                'challenge_id' => 6,
                'weapon_id' => 56,
            ],
            [
                'challenge_id' => 22,
                'weapon_id' => 56,
            ],
            [
                'challenge_id' => 43,
                'weapon_id' => 56,
            ],
            // Pistol -> Basilisk weapon_id:56 (Mastery)
            [
                'challenge_id' => 45,
                'weapon_id' => 56,
            ],
            [
                'challenge_id' => 50,
                'weapon_id' => 56,
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 56,
            ],

            // Pistol -> X13 Auto weapon_id:57 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 57,
            ],
            [
                'challenge_id' => 25,
                'weapon_id' => 57,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 57,
            ],
            [
                'challenge_id' => 42,
                'weapon_id' => 57,
            ],
            // Pistol -> X13 Auto weapon_id:57 (Mastery)
            [
                'challenge_id' => 45,
                'weapon_id' => 57,
            ],
            [
                'challenge_id' => 50,
                'weapon_id' => 57,
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 57,
            ],

            // Pistol -> FTac Siege weapon_id:58 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 58,
            ],
            [
                'challenge_id' => 8,
                'weapon_id' => 58,
            ],
            [
                'challenge_id' => 15,
                'weapon_id' => 58,
            ],
            [
                'challenge_id' => 23,
                'weapon_id' => 58,
            ],
            // Pistol -> FTac Siege weapon_id:58 (Mastery)
            [
                'challenge_id' => 45,
                'weapon_id' => 58,
            ],
            [
                'challenge_id' => 50,
                'weapon_id' => 58,
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 58,
            ],

            // Pistol -> GS Magna weapon_id:59 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 59,
            ],
            [
                'challenge_id' => 17,
                'weapon_id' => 59,
            ],
            [
                'challenge_id' => 34,
                'weapon_id' => 59,
            ],
            [
                'challenge_id' => 42,
                'weapon_id' => 59,
            ],
            // Pistol -> GS Magna weapon_id:59 (Mastery)
            [
                'challenge_id' => 45,
                'weapon_id' => 59,
            ],
            [
                'challenge_id' => 50,
                'weapon_id' => 59,
            ],
            [
                'challenge_id' => 56,
                'weapon_id' => 59,
            ],

            //Launchers
            // Launcher -> PILA weapon_id:60 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 60,
            ],
            // Launcher -> PILA weapon_id:60 (Mastery)
            [
                'challenge_id' => 47,
                'weapon_id' => 60,
            ],
            [
                'challenge_id' => 52,
                'weapon_id' => 60,
            ],
            [
                'challenge_id' => 57,
                'weapon_id' => 60,
            ],

            // Launcher -> Strela-P weapon_id:61 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 61,
            ],
            // Launcher -> Strela-P weapon_id:61 (Mastery)
            [
                'challenge_id' => 47,
                'weapon_id' => 61,
            ],
            [
                'challenge_id' => 51,
                'weapon_id' => 61,
            ],
            [
                'challenge_id' => 57,
                'weapon_id' => 61,
            ],

            // Launcher -> JOKR weapon_id:62 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 62,
            ],
            // Launcher -> JOKR weapon_id:62 (Mastery)
            [
                'challenge_id' => 46,
                'weapon_id' => 62,
            ],
            [
                'challenge_id' => 53,
                'weapon_id' => 62,
            ],
            [
                'challenge_id' => 57,
                'weapon_id' => 62,
            ],

            // Launcher -> RPG-7 weapon_id:63 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 63,
            ],
            // Launcher -> RPG-7 weapon_id:63 (Mastery)
            [
                'challenge_id' => 45,
                'weapon_id' => 63,
            ],
            [
                'challenge_id' => 53,
                'weapon_id' => 63,
            ],
            [
                'challenge_id' => 57,
                'weapon_id' => 63,
            ],

            //Melee
            // Melee -> Riot Shield weapon_id:64 (Basic)
            [
                'challenge_id' => 2,
                'weapon_id' => 64,
            ],
            // Melee -> Riot Shield weapon_id:64 (Mastery)
            [
                'challenge_id' => 46,
                'weapon_id' => 64,
            ],
            [
                'challenge_id' => 54,
                'weapon_id' => 64,
            ],
            [
                'challenge_id' => 59,
                'weapon_id' => 64,
            ],

            // Melee -> Combat Knife weapon_id:65 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 65,
            ],
            // Melee -> Combat Knife  weapon_id:65 (Mastery)
            [
                'challenge_id' => 46,
                'weapon_id' => 65,
            ],
            [
                'challenge_id' => 54,
                'weapon_id' => 65,
            ],
            [
                'challenge_id' => 58,
                'weapon_id' => 65,
            ],

            // Melee -> Dual Kodachis weapon_id:66 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 66,
            ],
            // Melee -> Dual Kodachis weapon_id:66 (Mastery)
            [
                'challenge_id' => 46,
                'weapon_id' => 66,
            ],
            [
                'challenge_id' => 54,
                'weapon_id' => 66,
            ],
            [
                'challenge_id' => 58,
                'weapon_id' => 66,
            ],

            // Melee -> Tonfa weapon_id:67 (Basic)
            [
                'challenge_id' => 1,
                'weapon_id' => 67,
            ],
            // Melee -> Tonfa weapon_id:67 (Mastery)
            [
                'challenge_id' => 46,
                'weapon_id' => 67,
            ],
            [
                'challenge_id' => 54,
                'weapon_id' => 67,
            ],
            [
                'challenge_id' => 58,
                'weapon_id' => 67,
            ],
        ];

        foreach ($challengeweapon as $cw) {
            $challenge = Challenge::find($cw['challenge_id']);
            $weapon = Weapon::find($cw['weapon_id']);

            $challenge->weapons()->attach($weapon->id);
        }
    }
}
