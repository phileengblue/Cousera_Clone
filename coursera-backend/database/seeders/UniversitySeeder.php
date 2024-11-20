<?php
namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UniversitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $universities =
        [
            ["University of Illinois Urbana-Champaign", 28, null],//1
            ["University of Colorado Boulder", 14, null],//2
            ["IBM", 26, null],//3
            ["DeepLearning.AI", 24, null],//4
            ["University of Huddersfield", 31, null],//5
            ["Google", 25, null],//6
            ["Board Infinity", 23, null],//7
            ["University of London", 20, null],//8
            ["University of Maryland Global Campus", 21, null],//9
            ["University of Michigan", 30, null],//10
            ["Illinois Institute of Technology", 32, null],//11
            ["Arizona State University", 33, null],//12
            ["Imperial College London", 34, null],//13
            ["CertNexus", 36, null],//14
            ["University of California, Berkeley", 37, null],//15
            ["O.P. Jindal Global University", 40, null],//16
            ["Georgetown University ", 41, null],//17
            ["University of North Texas", 42, null],//18
            ["University of Leeds", 43, null],//19

        ];

        foreach($universities as $university){
            DB::table('universities')->insert([
                'name' => $university[0],
                'filestorage_id' => $university[1],
                'description' => $university[2]
            ]);
        }
    }
}