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
            [
                'name' => 'Nerfgun',
                'weapon_class_id' => 1
            ],
            [
                'name' => 'Nerfrifle',
                'weapon_class_id' => 2
            ],
        ];

        foreach ($weapons as $weapon) {
            Weapon::create($weapon);
        }
    }
}
