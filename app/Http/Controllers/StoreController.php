<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;

class StoreController extends Controller
{
    public function show($store_id) {
    	$store = Store::find($store_id);

    	$items = $store->items;
    	
    	return view('store.showstore')
    			->with(compact('store'))
    			->with(compact('items'));
    }
}
