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

Auth::routes();

Route::get('/', 'HomeController@index');

Route::get('/store/{id_store}/addItem','ItemController@addItem')
		->middleware('auth');

Route::post('/store/{id_store}/addItem','ItemController@createItem')
		->middleware('auth');

Route::get('/store/{id_store}', 'StoreController@show');

Route::get('/store/{id_store}/edit', function () {
	return view('store.editstore');
});

Route::get('/createStore', function () {
	return view('store.createstore');
})		->middleware('auth');

Route::post('/createStore','StoreController@create')
		->middleware('auth');

Route::get('/store/{id_store}/{id_item}', 'ItemController@show')->name('item.show');




Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
