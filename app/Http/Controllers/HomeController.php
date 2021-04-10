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
            'client_secret' => '3364711930325075',
            'grant_type'    => 'authorization_code',
            'code'          => $request->code,
            'redirect_uri'  => 'https://vende-libre.herokuapp.com/vincular',
        ]);

        dd($response);
    }
}
