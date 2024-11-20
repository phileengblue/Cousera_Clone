<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CourseUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $course_users =
        [
            [2,1, true],
            [3,1, false],
            [4,1, false],
            [1,2, false],
            [5,2, true],
            [6,2, false],
            [4,3, true],
            [7,3, false],
            [8,3, false],
            [9,4, true],
            [10,4, false]
            
        ];


        foreach($course_users as $item){
            DB::table('course_users')->insert([
                'course_id' => $item[0],
                'user_id' => $item[1],
                'is_professor' => $item[2]
                ]);
        }
    }
}
