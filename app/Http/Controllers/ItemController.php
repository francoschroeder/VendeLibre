<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function show($item_id) {
        $item = Items::where('id', $item_Id)->get();
        return view();
    }

    public function edit($item_Id) {
        $userId = auth('api')->user()->id;
        $item = Items::where('id', $item_Id)
            ->update();
    }
}
