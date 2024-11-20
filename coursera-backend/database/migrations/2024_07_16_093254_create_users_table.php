<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();
            $table->date('birth_date')->nullable();
            $table->enum('gender',['male', 'female', 'other'])->nullable();
            $table->string('phone_number')->nullable();
            $table->unsignedBigInteger('filestorage_id')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();

            $table->foreign('filestorage_id')->references('id')->on('filestorage');
            $table->rememberToken();
            $table->timestamps();

            //Campi sezione Per Universities
            $table->string('institution_name')->nullable();
            $table->enum('institution_type', ['University/4 Year College', '2 Year College', 'Graduate or Professional School', 'Ministry of Education', 'Other'])->nullable();
            $table->enum('job_role', ['President/Provost', 'Chancellor/Rector', 'Vice-President/Vice-Provost', 'Vice-Chancellor/Vice-Rector', 'Registrar', 'CEO', 'COO/CIO', 'Dean', 'Department Head', 'Director', 'Professor', 'Student'])->nullable();
            $table->enum('department', ['Academic Affairs', 'Career Services', 'Continuing Education', 'Enrollment Management', 'Executive Leadership', 'International', 'Strategic Planning', 'Student Affairs', 'Teaching/Faculty/Research', 'Other'])->nullable();
            $table->enum('needs', ['Get in touch with sales', 'Existing customer support', 'Learner support', 'Courses for myself', 'Other'])->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
