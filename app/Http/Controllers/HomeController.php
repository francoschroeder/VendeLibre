<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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

        $user = auth()->user();

        $user->token_mercadopago = $response->body()->input('access_token');
        $user->refreshtoken_mercadopago = $response->body()->input('refresh_token');

        return view('vincular');
    }
}
