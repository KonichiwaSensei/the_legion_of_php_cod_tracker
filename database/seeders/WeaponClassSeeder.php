<?php

namespace Database\Seeders;

use App\Models\WeaponClass;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WeaponClassSeeder extends Seeder
{

    public function run(): void
    {
        DB::table('weapon_classes')->truncate();

        $weaponClasses = [
            [
                'name' => 'Assault Rifles',
            ],
            [
                'name' => 'Battle Rifles',
            ],
            [
                'name' => 'Submachine Guns',
            ],
            [
                'name' => 'Shotguns',
            ],
            [
                'name' => 'Light Machine Guns',
            ],
            [
                'name' => 'Marksman Rifles',
            ],
            [
                'name' => 'Sniper Rifles',
            ],
            [
                'name' => 'Handguns',
            ],
            [
                'name' => 'Launchers',
            ],
            [
                'name' => 'Melee',
            ],
        ];

        foreach ($weaponClasses as $weaponClass) {
            WeaponClass::create($weaponClass);
        }
    }
}
