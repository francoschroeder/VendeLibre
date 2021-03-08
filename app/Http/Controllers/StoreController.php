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

		$map = Mapper::map(53.381128999999990000, -1.470085000000040000);

		return view('store.showstore')
    			->with(compact('store'))
				->with(compact('items'))
				->with(compact('map'));
    }

    public function create(Request $request) {
    	$store = new Store;

    	$store->name 	= $request->name;
    	$store->user_id = Auth::id();

    	$store->save();

    	return redirect('/store/' . $store->id);
    }
}
