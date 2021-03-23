<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;
use App\Models\Item;
use App\Models\Style;
use Illuminate\Support\Facades\Auth;
use Cornford\Googlmapper\Facades\MapperFacade as Mapper;

class StoreController extends Controller
{
    public function show($store_id) {
			$store = Store::findOrFail($store_id);
			$user = auth()->user();
      
			if (auth()->user()==null){
				return view('store.showstore')
					->with(compact('store'));
			}
			else if (auth()->user()->id){
				$stores = $user->stores;
				return view('store.showstore')
					->with(compact('store'))
					->with(compact('stores'));}
    }

    public function create(Request $request) {
		
			request()->validate([
				'name' => ['required', 'min:2', 'max:155'],
				'latitud' => ['required', 'min:0'],
				'longitud' => ['required', 'min:2', 'max:155'],
				'phone' => ['required', 'min:2', 'max:155'],
				'email' => ['required', 'min:2', 'max:155'],
				'direction' => ['required', 'min:2', 'max:155'],
				'description' => ['required', 'min:2', 'max:155']


		]);
		
		$store = new Store;
		$style = new Style;

    	$store->name 	= $request->name;
		$store->latitud	= $request->latitud;
		$store->longitud = $request->longitud;
		$store->phone = $request->phone;
		$store->email = $request->email;
		$store->direction = $request->direction;
		$store->description = $request->description;
		$store->user_id = Auth::id();

    	$store->save();

    	$style->store_id = $store->id;

    	$style->save();

    	return redirect('/store/' . $store->id);
	}
	
	public function description($store_id){
		$store = Store::findOrFail($store_id);
		$user = auth()->user();
		
		//$map = Mapper::map($store->latitud, $store->longitud);
		$map = Mapper::map(1, 1);

		if (auth()->user()==null){
			return view('store.description')->with(compact('store'))
										->with(compact('map'));
		}
		else if (auth()->user()->id){
			$stores = $user->stores;
			return view('store.description')
							->with(compact('store'))
							->with(compact('map'))
							->with(compact('stores'));
		 }


	}

	public function edit($store_id) {
		$store = Store::find($store_id);
		$user = auth()->user();
		$stores = $user->stores;

		return view('store.editstore')
			->with(compact('store'))
			->with(compact('stores'))
			;
	}

	//API
	public function getStore($store_id) {
		$store = Store::find($store_id);

		return response()->json(['store' => $store,
								'items' => $store->items,
								'style' => $store->style]);
	}

	public function saveStore($store_id, Request $request) {
		$store = Store::find($store_id);

		$store->name = $request->input('name');
		$store->description = $request->input('description');

		foreach ($request->input('items') as $itemResponse) {
			$item = Item::find($itemResponse['id']);
			$item->title = $itemResponse['title'];
			$item->description = $itemResponse['description'];
			$item->price = $itemResponse['price'];

			$item->save();
		}

		$style = $store->style;
		
		$style->item_style = $request('style.item_style');
		$style->background = $request('style.background');

		$style->save();

		$store->save();

		return response()->json("OK");
	}
}
