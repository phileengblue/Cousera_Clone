<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $courses =
        [
            ["Master of Business Administration (iMBA)", "With education from an Illinois MBA, you will be prepared for a variety of managerial and executive positions. Our graduates have gone on to work for Fortune 500 companies including Microsoft, Walmart, and MGM resorts. Whether your passion lies in the travel industry, engineering, or healthcare, the iMBA will set you up for success in roles across all industries and sectors. ", 'inglese', "master", "advanced", 36, "months", 1250, '2024-11-22', null, 13, 2],//1
            ["Master of Science in Data Science", "No matter your academic background, the Master of Data Science (MS-DS) is an ideal choice if you’re interested in a career in data science. Program admission is based on your performance in your first three courses. You’ll learn theory, methods, tools, and programming languages—skills that qualify you for a variety of data scientist jobs, which are expected to increase by 36% between 2021 and 2031, according to the U.S. Bureau of Labor Statistics. This is more than seven times faster than the average growth rate for all jobs. The University of Colorado Boulder is a Tier 1 Research institution and home to a community of scientists, scholars, and educators—including Nobel Laureates, MacArthur Genius Grant winners, and National Medal of Science awardees.", "inglese", "master", "intermediate", 24, "months", 2000, '2024-11-22', null, 14, 1],//2
            ["Python per la scienza dei dati, l'intelligenza artificiale e lo sviluppo", "", "italiano", "course", "beginner", 25, "hours", null, '2024-11-23', null, 15, 12],//3
            ["Specialization in Deep Learing", "", "italiano", "specialization", "beginner", 30, "hours", null, '2024-11-25', null, 16, 12],//4
            ["MSc Management", "", "italiano", "degree_certificate", "advanced", 12, "months", null, '2024-11-24', null, 27, 17],//5
            ["Google Digital Marketing & E-commerce", "", "italiano", "degree", "advanced", 4, "weeks", null, '2024-11-29', null, 18, 17],//6
            ["Frontend Development using Angular", "", "italiano", "professional_certificate", "beginner", 6, "months", null, '2024-11-26', null, 19, 21],//7
            ["Bachelor of Science in Computer Science", "", "italiano", "degree", "beginner", 1, "hours", null, '2024-11-27', null, 20, 3],//8
            ["Bachelor of Science in Cyber Security Technology", "", "italiano", "degree_certificate", "mixed", 8, "months", 21, '2024-11-26', null, 21, 27],//9
            ["Diploma in International Business", "", "italiano", "diploma", "intermediate", 4, "weeks", null, '2024-11-25', null, 22, 19],//10
            ["Master of Applied Data Science", "", "inglese", "master", "advanced", 24, "months", 37.823, '2024-11-28', null, 29, 1],//11
            ["Master of Science in Computer Science", "", "inglese", "master", "advanced", 32, "months", 15.750, '2024-11-27', null, 14, 3],//12
            ["Master of Information Technology", "", "inglese", "master", "advanced", 22, "months", 15.000, '2024-11-24', null, 32, 4],//13
            ["Arizona State University TESOL", "", "inglese", "professional_certificate", "beginner", 4, "months", null, '2024-11-30', null, 33, 5],//14
            ["Master of Public Health", "", "inglese", "master", "advanced", 24, "months", 50.000, '2024-11-11', null, 29, 6],//15
            ["Global Master of Public Health", "", "inglese", "master", "advanced", 24, "months", 12.000, '2024-11-30', null, 34, 6],//16
            ["CertNexus Certificato Tecnologo Etico Emergente", "", "inglese", "professional_certificate", "beginner", 2, "months", null, '2024-11-29', null, 35, 7],//17
            ["Master of Science in Electrical Engineering", "", "inglese", "master", "advanced", 24, "months", 20.000, '2024-11-24', null, 14, 8],//18
            ["Master of Advanced Study in Engineering", "", "inglese", "master", "advanced", 9, "months", 42.000, '2024-11-01', null, 38, 8],//19
            ["Master of Arts in Public Policy", "", "inglese", "master", "advanced", 36, "months", 21.000, '2024-11-06', null, 39, 9],//20
            ["M.A. in International Relations, Security & Strategy", "", "inglese", "master", "advanced", 36, "months", 21.000, '2024-11-07', null, 39, 9],//21
            ["Bachelor of Arts in Liberal Studies Completion Program", "", "inglese", "diploma", "advanced", 16, "months", 1000, '2024-11-08', null, 41, 10],//22
            ["Bachelor of Applied Arts and Sciences", "", "inglese", "diploma", "advanced", 18, "months", 3500, '2024-11-07', null, 42, 10],//23
            ["MSc Data Science (Statistics)", "", "inglese", "master", "advanced", 24, "months", null, '2024-11-10', null, 43, 11],//24
            

            //sottocorsi corso con id 3
            /*["Nozioni di base di Python", "Questo modulo insegna le basi di Python e inizia esplorando alcuni dei diversi tipi di dati, come numeri interi, numeri reali e stringhe. Proseguendo con il modulo, imparerà ad utilizzare le espressioni nelle operazioni matematiche, a memorizzare i valori nelle variabili e a manipolare le stringhe in molti modi diversi.", null, null, null, 2, "hours", null, 3, null, null],
            ["Strutture dati Python", "Questo modulo inizia un viaggio nelle strutture di dati Python, spiegando l'uso di liste e tuple e il modo in cui sono in grado di memorizzare collezioni di dati in un'unica variabile. Poi imparerà a conoscere i dizionari e come funzionano memorizzando i dati in coppie di chiavi e valori, e terminerà con gli insiemi Python per imparare come questo tipo di raccolta può apparire in qualsiasi ordine e conterrà solo elementi unici.", null, null, null, 3, "hours", null, 3, null, null],
            ["Fondamenti di programmazione Python", "Questo modulo tratta i fondamenti di Python e inizia con i concetti di condizioni e ramificazione. Proseguendo nel modulo, imparerà come implementare i loop per iterare sulle sequenze, creare funzioni per eseguire un compito specifico, eseguire la gestione delle eccezioni per catturare gli errori e come le classi sono necessarie per creare oggetti.", null, null, null, 6, "hours", null, 3, null, null],
            ["Lavorare con i dati in Python", "Questo modulo spiega le basi del lavoro con i dati in Python e inizia il percorso con l'apprendimento di come leggere e scrivere i file. Proseguendo il modulo, scoprirà le migliori librerie Python che la aiuteranno nella manipolazione dei dati e nelle operazioni matematiche.", null, null, null, 5, "hours", null, 3, null, null],
            ["API e raccolta dati", "Questo modulo approfondisce le modalità uniche di raccolta dei dati attraverso l'uso di API e di web scraping. Esplora ulteriormente la raccolta dei dati spiegando come leggere e raccogliere i dati quando si tratta di diversi formati di file.", null, null, null, 6, "hours", null, 3, null, null],

            //sottocorsi corso con id 4
            ["Neural Networks and Deep Learning", "Nel primo corso della specializzazione in Apprendimento profondo, studierà i concetti fondamentali delle reti neurali e dell'apprendimento profondo.", null, null, null, 24, "hours", null, 4, null, null],
            ["Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization", "Nel secondo corso della specializzazione in Deep Learning, aprirà la scatola nera dell'apprendimento profondo per comprendere i processi che guidano le prestazioni e generare buoni risultati in modo sistematico.", null, null, null, 23, "hours", null, 4, null, null],
            ["Structuring Machine Learning Projects", "Nel terzo corso della specializzazione in Apprendimento profondo, imparerà a costruire un progetto di apprendimento automatico di successo e ad esercitarsi nel processo decisionale come leader di un progetto di apprendimento automatico.", null, null, null, 6, "hours", null, 4, null, null],
            ["Convolutional Neural Networks", "Nel quarto corso della Specializzazione in Apprendimento Profondo, comprenderà come si è evoluta la computer vision e acquisirà familiarità con le sue entusiasmanti applicazioni, come la guida autonoma, il riconoscimento dei volti, la lettura di immagini radiologiche e altro ancora. Alla fine, sarà in grado di costruire una rete neurale convoluzionale, comprese le variazioni recenti come le reti residuali; applicare le reti convoluzionali ai compiti di rilevamento e riconoscimento visivo; utilizzare il trasferimento di stile neurale per generare arte e applicare questi algoritmi a una varietà di immagini, video e altri dati 2D o 3D.", null, null, null, 35, "hours", null, 4, null, null],
            ["Sequence Models", "Nel quinto corso della specializzazione in Apprendimento profondo, acquisirà familiarità con i modelli di sequenza e le loro interessanti applicazioni, come il riconoscimento vocale, la sintesi musicale, i chatbot, la traduzione automatica, l'elaborazione del linguaggio naturale (NLP) e altro ancora.", null, null, null, 37, "hours", null, 4, null, null],
            */
        ];

        foreach($courses as $course){
            DB::table('courses')->insert([
                'title' => $course[0],
                'description' => $course[1],
                'language' => $course[2],
                'productTypeDescription' => $course[3],
                'difficulty_level' => $course[4],
                'duration' => $course[5],
                'duration_unit' => $course[6],
                'price' => $course[7],
                'start_date' => $course[8],
                'parent_id' => $course[9],
                'filestorage_id' => $course[10],
                'category_id' => $course[11]
                ]);
        }
    }
}
