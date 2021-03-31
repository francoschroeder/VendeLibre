<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getStore/{id_store}', 'StoreController@getStore');//->middleware('auth:api');
Route::put('/saveStore/{id_store}', 'StoreController@saveStore');//->middleware('auth:api');
Route::post('/updateImage/{id_item}', 'ItemController@updateImage');//->middleware('auth:api');
Route::delete('/deleteItem/{id_item}', 'ItemController@deleteItem');//->middleware('auth:api');
