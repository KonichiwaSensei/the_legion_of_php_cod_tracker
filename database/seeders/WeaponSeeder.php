<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WeaponSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $weaponClasses = [
            [
                'name' => 'Assault Rifle',
                
            ],
            [
                'name' => 'Battle Rifle',
                
            ],
            [
                'name' => 'Sub-Machine Gun',
                
            ]
        ];

       
        DB::table('weapon_classes')->insert($weaponClasses);
    }
}

