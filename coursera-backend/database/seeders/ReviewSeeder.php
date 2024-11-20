<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $reviews = 
        [
            ['This course is gre', 5, 2, 1],
            ['I love this course', 4, 2, 1],
            ['I hate this course', 1.5, 3, 2],
            ['I love this course', 5, 4, 1],
            ['I hate this course', 3.5, 2, 2],
            ['I love this course', 5, 2, 2],
            ['I hate this course', 4.5, 3, 1],
            ['I love this course', 2.5, 3, 2],
            ['I hate this course', 3, 4, 1],
            ['I love this course', 5, 4, 1],
            ['I hate this course', 1, 2, 3],
            ['I love this course', 5, 3, 3],
            ['I hate this course', 4.5, 2, 3],
            ['I love this course', 5, 4, 3],
        ];

        foreach($reviews as $review){
            DB::table('reviews')->insert([
                'comment' => $review[0],
                'vote' => $review[1],
                'user_id' => $review[2],
                'course_id' => $review[3],
            ]);
        }
    }
}
