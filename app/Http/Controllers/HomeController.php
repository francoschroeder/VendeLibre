<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        dd($request->code);
    }
}
