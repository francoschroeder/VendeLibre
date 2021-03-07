<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;
use App\Models\Item;

class ItemController extends Controller
{
    public function show($store_id, $id) {
        $item = Item::findOrFail($id);
        return view('item.show',compact('item'));
        }

    public function edit(Item $item){
        return view('items.edit',compact('item')); 
    }

    public function additem($id_store) {
        dd($id_store);
    	//return view('item.addItem',compact($store_id));
    }
   
}

