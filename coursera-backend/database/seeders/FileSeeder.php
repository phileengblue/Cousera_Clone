<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $images = [
            ['generic_img','generic_img','generic_img','profile_img'],//1
            ['image/category/arts_and_humanities.jpeg', 'arts_and_humanities', 'jpeg', 'category_img'],//2
            ['image/category/business.jpeg', 'business', 'jpeg', 'category_img'],//3
            ['image/category/computer_science.jpeg', 'computer_science', 'jpeg', 'category_img'],//4
            ['image/category/data_science.jpeg', 'data_science', 'jpeg', 'category_img'],//5
            ['image/category/health.jpeg', 'health', 'jpeg', 'category_img'],//6
            ['image/category/information_technology.jpeg', 'information_technology', 'jpeg', 'category_img'],//7
            ['image/category/language_learning.jpeg', 'language_learning', 'jpeg', 'category_img'],//8
            ['image/category/math_and_logic.jpeg', 'math_and_logic', 'jpeg', 'category_img'],//9
            ['image/category/media_and_technology.jpeg', 'development', 'jpeg', 'category_img'],//10
            ['image/category/physical_sciences_and_engineering.jpeg', 'physical_science_and_engineering', 'jpeg', 'category_img'],//11
            ['image/category/social_sciences.jpeg', 'social_sciences', 'jpeg', 'category_img'],//12
            ['image/course/master_of_business_administration.png', 'master_of_business_administration', 'png', 'course_img'],//13
            ['image/university/logo_university_of_colorado_boulder.png', 'logo_university_of_colorado_boulder', 'png', 'university_img'],//14
            ['image/course/python_course_image.png', 'python_course_image', 'png', 'course_img'],//15
            ['image/course/deep_learning_specializzation.png', 'deep_learning_specializzation', 'png', 'course_img'],//16
            ['image/course/msc_management.png', 'msc_management', 'png', 'course_img'],//17
            ['image/course/google_digital_marketing.png', 'google_digital_marketing', 'png', 'course_img'],//18
            ['image/course/angular_course.png', 'angular_course', 'png', 'course_img'],//19
            ['image/university/logo_unversity_of_london.png', 'logo_unversity_of_london', 'png', 'university_img'],//20
            ['image/university/logo_unversity_of_maryland_global_campus.png', 'logo_unversity_of_maryland_global_campus', 'png', 'university_img'],//21
            ['image/course/international_business_specialization.png', 'international_business_specialization', 'png', 'course_img'],//22
            ['image/university/logo_board_infinity.png', 'logo_board_infinity', 'png', 'university_img'],//23
            ['image/university/logo_deeplearning.png', 'logo_deeplearning', 'png', 'university_img'],//24
            ['image/university/logo_google.png', 'logo_google', 'png', 'university_img'],//25
            ['image/university/logo_IBM.png', 'logo_IBM', 'png', 'university_img'],//26
            ['image/course/logo_orizzontale_university_of_huddersfield.png', 'logo_orizzontale_university_of_huddersfield', 'png', 'course_img'],//27
            ['image/university/logo_university_of_illions.png', 'logo_university_of_illions', 'png', 'university_img'],//28
            ['image/course/University_of_Michigan_Horizontal_Logo.png', 'University_of_Michigan_Horizontal_Logo', 'png', 'course_img'],//29
            ['image/university/logo_university_of_michigan.png', 'logo_university_of_michigan', 'png', 'university_img'],//30
            ['image/university/logo_university_of_huddersfield.png', 'logo_university_of_huddersfield', 'png', 'university_img'],//31
            ['image/university/logo_illinois_tech.png', 'logo_illinois_tech', 'png', 'university_img'],//32
            ['image/university/logo_arizona_state_university.png', 'logo_arizona_state_university', 'png', 'university_img'],//33
            ['image/university/logo_imperial_college_london.png', 'logo_imperial_college_london', 'png', 'university_img'],//34
            ['image/course/logo_orizzonale_certnexus.png', 'logo_orizzonale_certnexus', 'png', 'course_img'],//35
            ['image/university/logo_certnexus.png', 'logo_certnexus', 'png', 'university_img'],//36
            ['image/university/logo_berkeley_university.png', 'logo_berkeley_university', 'png', 'university_img'],//37
            ['image/course/berkeley_engineering.png', 'berkeley_engineering', 'png', 'course_img'],//38
            ['image/course/logo_orizzontale_op_jindal_university.png', 'logo_orizzontale_op_jindal_university', 'png', 'course_img'],//39
            ['image/university/logo_op_jindal_university.png', 'logo_op_jindal_university', 'png', 'university_img'],//40
            ['image/university/logo_georgetown_university.png', 'logo_georgetown_university', 'png', 'university_img'],//41
            ['image/university/logo_university_north_texas.png', 'logo_university_north_texas', 'png', 'university_img'],//42
            ['image/university/logo_university_of_leeds.png', 'logo_university_of_leeds', 'png', 'university_img'],//43

        ];

        foreach($images as $image){
            DB::table('filestorage')->insert([
                'path' => $image[0],
                'name' => $image[1],
                'extension' => $image[2],
                'type' => $image[3],
                ]);
        }
    }
}
