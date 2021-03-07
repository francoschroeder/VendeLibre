<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/Item', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/store/{id_store}', 'StoreController@show');

Route::get('/store/{id_store}/{id_item}', 'ItemController@show')->name('item.show');

Route::get('/store/{id_store}/addItem', 'ItemController@addItem')->name('item.addItem');

