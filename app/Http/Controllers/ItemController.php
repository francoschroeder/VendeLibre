<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;
use App\Models\Item;
use Illuminate\Support\Facades\File;
use MercadoPago;
use Validator;

class ItemController extends Controller
{
    public function show($store_id, $id) {
        $item = Item::findOrFail($id);
        $store = Store::findOrFail($store_id);
        $user = $store->user;

        if ($user->token_mercadopago == null)
            return view('item.show')
                ->with(compact('item'))
                ->with(compact('store'))
                ->with('stores', $user->stores)
                ->with('no_token', true);

        // Agrega credenciales
        MercadoPago\SDK::setAccessToken($user->token_mercadopago);

        // Crea un objeto de preferencia
        $preference = new MercadoPago\Preference();

        // Crea un ítem en la preferencia
        $product = new MercadoPago\Item();
        $product->title = $item->title;
        $product->quantity = 1;
        $product->unit_price = $item->price;
        $preference->items = array($product);
        $preference->save();

        $user = auth()->user();
		
        if (auth()->user()==null){
			return view('item.show')
                ->with(compact('item'))
                ->with(compact('store'))
                ->with('no_token', false)
                ->with(compact('preference'));
		}
		else if (auth()->user()->id){
            $stores = $user->stores;
			return view('item.show')
                ->with(compact('item'))
                ->with(compact('store'))
                ->with(compact('stores'))
                ->with('no_token', false)
                ->with(compact('preference'));
        
        }
    }

    public function addItem($id_store) {
        $store = Store::findOrFail($id_store);
        $user = auth()->user();
		
        if (auth()->user()==null){
			return view('store.showstore')
					->with(compact('store'));
		}
		else if (auth()->user()->id){
            $stores = $user->stores;
            return view('item.create')
            ->with(compact('store'))
            ->with(compact('stores'));
        }
    }

    public function createItem($store_id){
        request()->validate([
            'title' => ['required', 'min:2', 'max:50'],
            'price' => ['required', 'min:0,0'],
            'description' => ['required', 'min:2', 'max:155'],
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg'
        ]);
        
        $item = new Item;
        $item->title = request('title');
        $item->price = request('price');
        $item->description = request('description');
        $item->store_id = $store_id;
        $item->save();

        if (request()->hasFile('image')) {
            request('image')->move(public_path('images'), $item->id);
            $item->image = '/images/'.$item->id;
        }

        $item->save();

        return redirect('/store/'.$store_id); 
    }

    //API
    public function deleteItem($item_id) {
        $item = Item::findOrFail($item_id);
        $user_id = auth('api')->user()->id;

        if ($item->store->user->id != $user_id)
            return response()->json("Acceso no autorizado. Usted no es el propietario de esta tienda");

        File::delete(public_path('images').'/'.$item_id);

        $item->delete();

        return response()->json('Item eliminado satisfactoriamente');
    }

    public function updateImage($item_id, Request $request) {
        $user_id = auth('api')->user()->id;
        $item = Item::find($item_id);

        if ($item->store->user_id != $user_id) 
            return response()->json("Acceso no autorizado. Usted no es el propietario de esta tienda");

        if ($request->hasFile('img') && $request->file('img')->isValid()) {
            $validator = Validator::make($request->all(), [
                'img' => 'image|mimes:jpeg,png,jpg,gif,svg',
            ]);

            if ($validator->fails())
                return response()->json("Solicitud inválida: Imagen no soportada");

            $request->file('img')->move(public_path('images'), $item_id);
            $item->image = '/images/'.$item_id;

            $item->save();

            return response()->json("Imagen guardada satisfactoriamente");
        }

        return response()->json("Solicitud inválida");
    }
}
