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
        Schema::create('filestorage', function (Blueprint $table) {
            $table->id();
            $table->string('path');
            $table->text('name');
            $table->text('extension');
            $table->enum('type', ['profile_img','category_img','course_img','university_img'])->nullable();

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
        Schema::dropIfExists('filestorage');
    }
};
