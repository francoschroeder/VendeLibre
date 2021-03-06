<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;
use App\Models\Item;

class StoreController extends Controller
{
    public function show($store_id) {
    	$store = Store::findOrFail($store_id);
		$items = Item::findOrfail($store_id)->first();
		
		return view('store.showstore',compact('store'),compact('items'));
    		
    }
}
