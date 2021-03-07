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
        return view('item.edit',compact('item')); 
    }

    public function addItem($id_store) {
        $store = Store::findOrFail($id_store);
        return view('item.create',compact('store'));
       
    }
   
}

