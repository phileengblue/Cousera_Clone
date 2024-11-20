<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\FilestorageController;
use App\Http\Controllers\FilterController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\UniversityController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// API AuthController
Route::controller(AuthController::class)->prefix('auth')->group(function (){
    Route::post('registerUser', 'registerUser');
    Route::post('login', 'login');
    Route::post('logout', 'logout');
    Route::post('change-password', 'changePassword');
    Route::post('updateRole/{id}', 'updateRole');
});

// API UserController
Route::controller(UserController::class)->prefix('user')->group(function (){
    Route::get('index', 'index');
    Route::get('show/{id}', 'show');
    Route::post('store', 'store');
    Route::post('update/{id}', 'update');
    Route::delete('destroy/{id}', 'destroy');
    Route::post('courseRegistration/{id}', 'courseRegistration');
    Route::post('removeCourseRegistration/{id}', 'removeCourseRegistration');
    Route::post('addView/{id}', 'addView');
    Route::get('showRegisteredCourses', 'showRegisteredCourses');
    Route::post('formRegistration', 'formRegistration');
    
    Route::middleware('role:superadmin')->group(function () {
        Route::post('addProfessor', 'addProfessor');
    });
});

Route::controller(PasswordResetController::class)->prefix('password')->group(function(){
    Route::post('forget-password', 'forgetPassword');
    Route::post('reset-password', 'resetPassword');
});

Route::controller(ReviewController::class)->prefix('review')->group(function(){
    Route::post('{course_id}/add', 'addReview');
    Route::put('{course_id}/update', 'updateReview');
    Route::delete('{course_id}/delete', 'deleteReview');
});

Route::controller(CourseController::class)->prefix('course')->group(function (){
    Route::post('store', 'store');
    Route::get('index', 'index');
    Route::get('getAllInformations', 'getAllInformations');
    // Route::get('getMostPopularCourses', 'getMostPopularCourses');
    // Route::get('newCourses', 'newCourses');
    // Route::get('freeCourses', 'freeCourses');
    // Route::get('MasterDegreeCourses', 'MasterDegreeCourses');
    // Route::get('hightLevelDegrees', 'hightLevelDegrees');
    Route::get('indexHomePage', 'indexHomePage');
    Route::get('{id}/getCourseInstructors', 'getCourseInstructors');

    Route::get('{id}/show', 'show');
    Route::post('{id}/update', 'update');
    Route::delete('{id}/delete', 'destroy');

    Route::get('MaxiIndex', 'MaxiIndex');
});

Route::controller(SkillController::class)->prefix('skill')->group(function (){
    Route::post('addSkillUser', 'addSkillUser');
    Route::post('addSkillCourse/{id}', 'addSkillCourse');
    Route::put('update/{id}', 'updateUserSkill');
    Route::delete('delete/{id}', 'deleteUserSkill');
});

Route::controller(FilterController::class)->prefix('filter')->group(function($router){
    Route::get('filter', 'filter');
});

Route::controller(UniversityController::class)->prefix('university')->group(function () {
    
    Route::middleware('role:superadmin')->group(function () {
        Route::post('store', 'store');
        Route::post('{id}/update', 'update');
    });

    Route::get('index', 'index');
    Route::get('{id}/show', 'show');
    Route::get('{id}/getUniversityCourses', 'getUniversityCourses');
    Route::get('{id}/getUniversityInstructors', 'getUniversityInstructors');
    Route::delete('{id}/delete', 'destroy');
    
});

Route::controller(FilestorageController::class)->prefix('filestorage')->group(function () {
    Route::post('storeImage', 'storeImage');
    Route::get('viewDatas/{id}', 'getFileDataById');
});
