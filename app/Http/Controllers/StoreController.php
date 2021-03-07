<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;

class StoreController extends Controller
{
    public function show($store_id) {
    	$store = Store::findOrFail($store_id);
		$items = $store->items;
    	
    	return view('store.showstore')
    			->with(compact('store'))
    			->with(compact('items'));
    }

    public function create(Request $request) {
    	$store = new Store;

    	$store->name 	= $request->name;
    	$store->user_id = $request->user_id;

    	$store->save();

    	return redirect('/store/' . $store->id);
    }
}
