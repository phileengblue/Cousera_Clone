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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->text('title')->nullable();
            $table->text('description')->nullable();
            $table->string('language')->nullable();
            $table->enum('productTypeDescription',['guided_project', 'course', 'project', 'specialization', 'professional_certificate', 'degree', 'postgraduate_diploma', 'degree_certificate', 'diploma', 'master'])->nullable();
            $table->enum('difficulty_level',['beginner', 'intermediate', 'advanced', 'mixed'])->nullable();
            $table->double('duration')->nullable();
            $table->enum('duration_unit',['hours', 'days', 'weeks', 'months', 'years'])->nullable();
            $table->float('price')->nullable();
            $table->date('start_date')->nullable();
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->unsignedBigInteger('filestorage_id')->nullable();
            $table->unsignedBigInteger('category_id')->nullable();

            $table->foreign('filestorage_id')->references('id')->on('filestorage');
            $table->foreign('category_id')->references('id')->on('categories');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
};
