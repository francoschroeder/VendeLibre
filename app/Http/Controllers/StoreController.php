<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;
use Illuminate\Support\Facades\Auth;
use Cornford\Googlmapper\Facades\MapperFacade as Mapper;

class StoreController extends Controller
{
    public function show($store_id) {
    	$store = Store::findOrFail($store_id);
		$items = $store->items;

		
		
		//hay que tener la app_key
		//Mapper::location('Sheffield');



		return view('store.showstore')
    			->with(compact('store'))
				->with(compact('items'));
    }

    public function create(Request $request) {
    	$store = new Store;

    	$store->name 	= $request->name;
		$store->latitud	= $request->latitud;
		$store->longitud = $request->longitud;
		$store->phone = $request->phone;
		$store->email = $request->email;
		$store->direction = $request->direction;
		$store->description = $request->description;
		$store->user_id = Auth::id();

    	$store->save();

    	return redirect('/store/' . $store->id);
	}
	
	public function description($store_id){
		$store = Store::findOrFail($store_id);
		$map = Mapper::map($store->latitud, $store->longitud);
		return view('store.description')->with(compact('store'))
										->with(compact('map'));
	}
}
