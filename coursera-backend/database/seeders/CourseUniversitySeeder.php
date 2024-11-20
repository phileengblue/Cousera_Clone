<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CourseUniversitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $course_universities =
        [
            [1,1],
            [2,2],
            [3,3],
            [4,4],
            [5,5],
            [6,6],
            [7,7],
            [8,8],
            [9,9],
            [10,2],
            [11,10],
            [12,2],
            [13,11],
            [14,12],
            [15,10],
            [16,13],
            [17,14],
            [18,2],
            [19,15],
            [20,16],
            [21,16],
            [22,17],
            [23,18],
            [24,19],

        ];


        foreach($course_universities as $item){
            DB::table('course_universities')->insert([
                'course_id' => $item[0],
                'university_id' => $item[1],
                ]);
        }
    }
}
