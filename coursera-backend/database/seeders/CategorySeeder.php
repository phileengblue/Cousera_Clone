<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories =
        [
            ["Data Science", 5, null], //1
            ["Affari", 3, null], //2
            ["Informatica", 4, null], //3
            ["Tecnologia dell'informazione", 7, null], //4
            ["Apprendimento delle lingue", 8, null], //5
            ["Salute", 6, null], //6
            ["Sviluppo personale", 10, null], //7
            ["Scienza fisica e ingegneria", 11, null], //8
            ["Scienze sociali", 12, null], //9
            ["Arti e scienze umane", 2, null], //10
            ["Matematica e logica", 9, null], //11

            ["Data Analysis", null, 1], //12
            ["Machine Learning", null, 1], //13
            ["Probability and Statistics", null, 1], //14

            ["Leadership and Management", null, 2], //15
            ["Finance", null, 2], //16
            ["Marketing", null, 2], //17
            ["Entrepreneurship", null, 2], //18
            ["Business Essential", null, 2], //19
            ["Business Strategy", null, 2], //20

            ["Software Development", null, 3], //21
            ["Mobile and Web Development", null, 3], //22
            ["Algorithms", null, 3], //23
            ["Computer Security and Networks", null, 3], //24
            ["Design and Product", null, 3], //25

            ["Cloud Computing", null, 4], //26
            ["Security", null, 4], //27
            ["Data Management", null, 4], //28
            ["Networking", null, 4], //29
            ["Support and Operations", null, 4], //30

            ["Lerning English", null, 5], //31
            ["Other Languages", null, 5], //32

            ["Animal Health", null, 6], //33
            ["Basic Science", null, 6], //34
            ["Health Informatics", null, 6], //35
            ["Healthcare Management", null, 6], //36
            ["Nutrition", null, 6], //37
            ["Patient Care", null, 6], //38
            ["Public Health", null, 6], //39
            ["Research", null, 6], //40
            ["Psychology", null, 6], //41

            ["Electrical Engineering", null, 8], //42
            ["Mechanical Engineering", null, 8], //43
            ["Chemistry", null, 8], //44
            ["Environmental Science and Sustainability", null, 8], //45
            ["Physics and Astronomy", null, 8], //46
            ["Research Methods", null, 8], //47

            ["Economics", null, 9], //48
            ["Education", null, 9], //49
            ["Governance and Society", null, 9], //50
            ["Law", null, 9], //51

            ["History", null, 10], //52
            ["Music and Art", null, 10], //53
            ["Philosophy", null, 10],//54
        ];

        foreach($categories as $category){
            DB::table('categories')->insert([
                'alias' => $category[0],
                'filestorage_id' => $category[1],
                'parent_id' => $category[2]
            ]);
        }
    }
}
