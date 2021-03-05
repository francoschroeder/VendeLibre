<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function show($store_id, $item_id) {

       dd($item_id);
       return view('home');
        // $item = Items::where('id', $item_Id)->get();
       // return view();
    }

    public function edit(Item $item){
        return view('items.edit',compact('item')); 
    }

    public function store(){
        return $this->belongsTo(Store::class);
    }
    public function sstore($item){

        request()->validate([
            'title' => ['required', 'min:2', 'max:155'],
            'price' => ['required','float'],
            'descripion' => ['required', 'min:2', 'max:155']
        ]);
    
        $item = new Item;
        $item->store_id = $things;
        $item->title = request('title');
        $item->price = request('price');
        $item->description = request('description');
        $item->save();

        return redirect('/things'); 
    }

    
}

