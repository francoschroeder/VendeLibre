@extends('layouts.navBar')
@extends('layouts.headerStore')


@section('title')
    Página Principal
@endsection

@section('content')


<div class="container">
  <div class="row">
    <div class="col-sm-3">
      <img src="{{url($item->image)}}" alt="No hay Imagen"/>
    </div>
    <div class="col-sm-9">
      
        <div class="col-8 col-sm-6 p-2">
            <h1> {{$item->title}} </h1>
        </div>
        <div class="col-4 col-sm-6 p-2">
            <h5 class="p-1">$ {{$item->price}} </h5>
            <h5 class="p-1"> {{$item->description}} </h5>
            
            @if (!$no_token)
            <script
                src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
                data-preference-id={{$preference->id}}>
            </script>
            @elseif (Auth::check() && Auth::user()->id == $store->user_id)
            <br>
            <p>¡Todavía no ha vinculado su cuenta con MercadoPago!</p>
            <p>No podrá empezar a vender sus productos hasta que no lo haga</p>
            <a href="https://auth.mercadopago.com.ar/authorization?client_id={{env('MERCADOPAGO_APP_ID')}}&response_type=code&platform_id=mp&redirect_uri={{env('MERCADOPAGO_REDIRECT_URI')}}">
                <button class="btn btn-outline-info" >Vincular con MercadoPago</button>
            </a>
            @endif
        </div>
    </div>
  </div>
</div>
@endsection