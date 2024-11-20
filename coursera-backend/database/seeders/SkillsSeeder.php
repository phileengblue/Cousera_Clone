<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkillsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $skills =
        [
            ["Leadership e gestione"],
            ["strategia"],
            ["pensiero critico"],
            ["marketing"],
            ["finanza"],
            ["imprenditoria"],
            ["analisi dei dati"],
            ["strategia e operazioni"],
            ["analisi aziendale"],
            ["apprendimento automatico"],
            ["gestione dei dati"],
            ["programmazione Python"]

        ];

        foreach($skills as $skill){
            DB::table('skills')->insert([
                'name' => $skill[0],
            ]);
        }
    }
}
