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

        return view('item.create')
                ->with(compact('store'));
    }

    public function createItem($store_id){
        
        
        request()->validate([
            'title' => ['required', 'min:2', 'max:155'],
            'price' => ['required', 'min:0,0'],
            'description' => ['required', 'min:2', 'max:155']

        ]);
        
        $item = new Item;
        $item->title = request('title');
        $item->price = request('price');
        $item->description = request('description');
        $item->store_id = $store_id;
        $item->save();
        return redirect('/store/'.$store_id); 
        
    }
}

