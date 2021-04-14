<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;
use App\Models\Item;
use App\Models\Style;
use Illuminate\Support\Facades\Auth;
use Cornford\Googlmapper\Facades\MapperFacade as Mapper;
use Validator;

class StoreController extends Controller
{
	public function show($store_id) {
		$store = Store::findOrFail($store_id);

		return view('store.showstore')
			->with(compact('store'));
	}

    public function create(Request $request) {
		request()->validate([
			'name' => ['required', 'min:2', 'max:50'],
			'latitud' => ['required', 'numeric', 'between:-90,90'],
			'longitud' => ['required', 'numeric', 'between:-180,180'],
			'phone' => ['required', 'min:2', 'max:15'],
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
	
	public function description($store_id) {
		$store = Store::findOrFail($store_id);
		
		$map = Mapper::map($store->latitud, $store->longitud);

		return view('store.description')
			->with(compact('store'))
			->with(compact('map'));
	}

	public function edit($store_id) {
		$store = Store::find($store_id);

		if ($store->user_id != auth()->user()->id)
			return view('error')
				->with('message', 'No está autorizado para acceder a este contenido');

		return view('store.editstore')
			->with(compact('store'));
	}

	//API
	public function getStore($store_id) {
		$store = Store::find($store_id);

		return response()->json(['store' => $store,
								'items' => $store->items,
								'style' => $store->style]);
	}

	public function saveStore($store_id, Request $request) {
		$user_id = auth('api')->user()->id;
		$store = Store::find($store_id);

		if ($store->user_id != $user_id)
			return response()->json("Acceso no autorizado. Usted no es el propietario de esta tienda");

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

		$style->item_style = $request->input('style.item_style');
		$style->background_color = $request->input('style.background_color');
		$style->items_color = $request->input('style.items_color');

		$style->save();

		$store->save();

		return response()->json("Cambios guardados satisfactoriamente");
	}

	public function updateImage($store_id, Request $request) {
        $user_id = auth('api')->user()->id;
        $store = Store::find($store_id);

        if ($store->user_id != $user_id) 
            return response()->json("Acceso no autorizado. Usted no es el propietario de esta tienda");

        if ($request->hasFile('img') && $request->file('img')->isValid()) {
            $validator = Validator::make($request->all(), [
                'img' => 'image|mimes:jpeg,png,jpg,gif,svg',
            ]);

            if ($validator->fails())
                return response()->json("Solicitud invalida");

            $request->file('img')->move(public_path('images'), 'store'.$store_id);

            $store->image = '/images/store'.$store_id;
            $store->save();

            return response()->json("Imagen guardada satisfactoriamente");
        }

        return response()->json("Solicitud invalida");
    }
}
