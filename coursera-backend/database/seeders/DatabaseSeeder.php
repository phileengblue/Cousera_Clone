<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            LaratrustSeeder::class,
            UserSeeder::class,
            RoleUserSeeder::class,
            FileSeeder::class,
            UniversitySeeder::class,
            CategorySeeder::class,
            CourseSeeder::class,
            SkillsSeeder::class,
            CourseUniversitySeeder::class,
            CourseUserSeeder::class,
            ReviewSeeder::class
        ]);
    }
}
