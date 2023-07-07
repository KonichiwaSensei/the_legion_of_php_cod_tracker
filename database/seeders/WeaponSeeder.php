<?php

namespace Database\Seeders;

use App\Models\Weapon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WeaponSeeder extends Seeder
{

    public function run(): void
    {

        DB::table('weapons')->truncate();

        $weapons = [
            // Assault Rifles weapon_class_id:1
            [
                'name' => 'M4',
                'weapon_class_id' => 1
            ],
            [
                'name' => 'TAQ-56',
                'weapon_class_id' => 1
            ],
            [
                'name' => 'Kastov 762',
                'weapon_class_id' => 1
            ],
            [
                'name' => 'Lachmann-556',
                'weapon_class_id' => 1
            ],
            [
                'name' => 'STB 556',
                'weapon_class_id' => 1
            ],
            [
                'name' => 'M16',
                'weapon_class_id' => 1
            ],
            [
                'name' => 'Kastov-74u',
                'weapon_class_id' => 1
            ],
            [
                'name' => 'Kastov 545',
                'weapon_class_id' => 1
            ],
            [
                'name' => 'M13B',
                'weapon_class_id' => 1
            ],
            [
                'name' => 'Chimera',
                'weapon_class_id' => 1
            ],
            [
                'name' => 'ISO Hemlock',
                'weapon_class_id' => 1
            ],
            [
                'name' => 'Tempus Razorback',
                'weapon_class_id' => 1
            ],
            // Battle Rifles weapon_class_id:2
            [
                'name' => 'Lachmann-762',
                'weapon_class_id' => 2
            ],
            [
                'name' => 'SO-14',
                'weapon_class_id' => 2
            ],
            [
                'name' => 'TAQ-V',
                'weapon_class_id' => 2
            ],
            [
                'name' => 'FTac Recon',
                'weapon_class_id' => 2
            ],
            [
                'name' => 'Cronen Squall',
                'weapon_class_id' => 2
            ],
            // Submachine Guns weapon_class_id:3
            [
                'name' => 'Vel 46',
                'weapon_class_id' => 3
            ],
            [
                'name' => 'MX9',
                'weapon_class_id' => 3
            ],
            [
                'name' => 'Lachmann Sub',
                'weapon_class_id' => 3
            ],
            [
                'name' => 'Vaznev-9K',
                'weapon_class_id' => 3
            ],
            [
                'name' => 'FSS Hurricane',
                'weapon_class_id' => 3
            ],
            [
                'name' => 'Minibak',
                'weapon_class_id' => 3
            ],
            [
                'name' => 'PDSW 528',
                'weapon_class_id' => 3
            ],
            [
                'name' => 'Fennec 45',
                'weapon_class_id' => 3
            ],
            [
                'name' => 'BAS-P',
                'weapon_class_id' => 3
            ],
            [
                'name' => 'ISO 45',
                'weapon_class_id' => 3
            ],
            // Shotguns weapon_class_id:4
            [
                'name' => 'Lockwood 300',
                'weapon_class_id' => 4
            ],
            [
                'name' => 'Expedite 12',
                'weapon_class_id' => 4
            ],
            [
                'name' => 'Bryson 800',
                'weapon_class_id' => 4
            ],
            [
                'name' => 'Bryson 890',
                'weapon_class_id' => 4
            ],
            [
                'name' => 'KV Broadside',
                'weapon_class_id' => 4
            ],
            // Light Machine Guns weapon_class_id:5
            [
                'name' => 'Sakin MG38',
                'weapon_class_id' => 5
            ],
            [
                'name' => 'HCR 56',
                'weapon_class_id' => 5
            ],
            [
                'name' => '556 Icarus',
                'weapon_class_id' => 5
            ],
            [
                'name' => 'RAAL MG',
                'weapon_class_id' => 5
            ],
            [
                'name' => 'RPK',
                'weapon_class_id' => 5
            ],
            [
                'name' => 'RAPP H',
                'weapon_class_id' => 5
            ],
            // Marksman Rifles weapon_class_id:6
            [
                'name' => 'EBR-14',
                'weapon_class_id' => 6
            ],
            [
                'name' => 'SP-R 208',
                'weapon_class_id' => 6
            ],
            [
                'name' => 'Lockwood MK2',
                'weapon_class_id' => 6
            ],
            [
                'name' => 'LM-S',
                'weapon_class_id' => 6
            ],
            [
                'name' => 'SA-B 50',
                'weapon_class_id' => 6
            ],
            [
                'name' => 'TAQ-M',
                'weapon_class_id' => 6
            ],
            [
                'name' => 'Crossbow',
                'weapon_class_id' => 6
            ],
            [
                'name' => 'Tempus Torrent',
                'weapon_class_id' => 6
            ],
            // Sniper Rifles weapon_class_id:7
            [
                'name' => 'MCPR-300',
                'weapon_class_id' => 7
            ],
            [
                'name' => 'Signal 50',
                'weapon_class_id' => 7
            ],
            [
                'name' => 'LA-B 330',
                'weapon_class_id' => 7
            ],
            [
                'name' => 'SP-X 80',
                'weapon_class_id' => 7
            ],
            [
                'name' => 'Victus XMR',
                'weapon_class_id' => 7
            ],
            [
                'name' => 'FJX Imperium',
                'weapon_class_id' => 7
            ],
            // Handguns weapon_class_id:8
            [
                'name' => 'P890',
                'weapon_class_id' => 8
            ],
            [
                'name' => '.50 GS',
                'weapon_class_id' => 8
            ],
            [
                'name' => 'X12',
                'weapon_class_id' => 8
            ],
            [
                'name' => 'Basilisk',
                'weapon_class_id' => 8
            ],
            [
                'name' => 'X13 Auto',
                'weapon_class_id' => 8
            ],
            [
                'name' => 'FTac Siege',
                'weapon_class_id' => 8
            ],
            [
                'name' => 'GS Magna',
                'weapon_class_id' => 8
            ],
            // Launchers weapon_class_id:9
            [
                'name' => 'PILA',
                'weapon_class_id' => 9
            ],
            [
                'name' => 'Strela-P',
                'weapon_class_id' => 9
            ],
            [
                'name' => 'JOKR',
                'weapon_class_id' => 9
            ],
            [
                'name' => 'RPG-7',
                'weapon_class_id' => 9
            ],
            // Melee weapon_class_id:10
            [
                'name' => 'Riot Shield',
                'weapon_class_id' => 10
            ],
            [
                'name' => 'Combat Knife',
                'weapon_class_id' => 10
            ],
            [
                'name' => 'Dual Kodachis',
                'weapon_class_id' => 10
            ],
            [
                'name' => 'Tonfa',
                'weapon_class_id' => 10
            ],






        ];

        foreach ($weapons as $weapon) {
            Weapon::create($weapon);
        }
    }
}
