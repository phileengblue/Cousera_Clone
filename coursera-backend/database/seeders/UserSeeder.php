<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users =
        [
            ["admin", "admin", '1990-03-04', "male", "", null, "admin@gmail.com", "admin"],
            ["Andrea", "Pacioni", '1991-08-15', "male", "", null, "andrea.pacioni@gmail.com", "user"],
            ["Giacomo", "Giacomino", '1992-06-23', "male", "", null, "giacomo.giacomino@gmail.com", "user"],
            ["Davide", "Basile", '1996-02-07', "male", "", null, "davide.basile@gmail.com", "user"],

        ];


        foreach($users as $user){
            DB::table('users')->insert([
                'firstname' => $user[0],
                'lastname' => $user[1],
                'birth_date' => $user[2],
                'gender' => $user[3],
                'phone_number' => ($user[4]),
                'filestorage_id' => $user[5],
                'email' => $user[6],
                'password' => Hash::make($user[7]),
                ]);
        }
    }
}
