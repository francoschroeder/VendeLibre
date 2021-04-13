<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Store;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /*public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        if (auth()->user()==null){
            return view('home');
        }
        else if (auth()->user()->id) {
            $user = auth()->user();
            $stores = $user->stores;
            return view('homeLogin')
                    ->with(compact('stores'));
                 
        }
    }

    public function search(Request $request)
    {
        $nombres  = Store::where("name","like",$request->text."%")->take(5)->get();
        if ($nombres != null)
         return view("pages")->with(compact('nombres'));      
    }

    public function createStore()
    {
        return view('store.createStore');
    }

    public function vincular(Request $request) {
        $response = Http::withHeaders([
            'Accept'        => 'application/json',
            'Content-Type'  => 'application/x-www-form-urlencoded'
        ])->post('https://api.mercadopago.com/oauth/token', [
            'client_secret' => env('MERCADOPAGO_ACCESS_TOKEN'),
            'grant_type'    => 'authorization_code',
            'code'          => $request->code,
            'redirect_uri'  => env('MERCADOPAGO_REDIRECT_URI'),
        ]);

        if ($response->failed())
            return view('error');

        $user = auth()->user();

        $user->token_mercadopago = $response->json(['access_token']);
        $user->refreshtoken_mercadopago = $response->json(['refresh_token']);

        $user->save();

        return view('vincular');
    }
}
