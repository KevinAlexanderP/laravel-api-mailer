<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\MessageController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::view('/','home')->name('home');

Route::view('/nosotros','nosotros')->name('nosotros');

Route::get('/portfolio',[PortfolioController::class,'index'])->name('portfolio');
// Route::get('/portfolio','App\Http\Controllers\PortfolioController@index')->name('portfolio');

Route::view('/contact','contact')->name('contact');

Route::post('contact','App\Http\Controllers\MessageController@store');

Route::apiResource('projects', 'App\Http\Controllers\PortfolioController');

