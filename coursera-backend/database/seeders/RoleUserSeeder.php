<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_user = [
            [1, 1, "App\Models\User"],
            [3, 2, "App\Models\User"],
            [3, 3, "App\Models\User"],
            [3, 4, "App\Models\User"],
        ];

        foreach($role_user as $user){
            DB::table('role_user')->insert([
                'role_id' => $user[0],
                'user_id' => $user[1],
                'user_type' => $user[2],
                ]);
        }
    }
}
