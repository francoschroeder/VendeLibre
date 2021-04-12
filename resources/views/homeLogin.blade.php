@extends('home')

@section('storeList')
<div class="row">
    <div class="col-sm">    
        <div class="filter-widget">
            <h4 class="fw-title">Mis Tiendas</h4>
                        
            @forelse($stores as $store )
                <ul class="filter-catagories">
                    <li><a href="/store/{{$store->id}}">{{$store->name}}</a></li>
                </ul>
            @empty
                <p>Todavia no tienes ninguna tienda</p>
            @endforelse
        </div>
    </div>
    <div class="col-sm">
    <a href="https://auth.mercadopago.com.ar/authorization?client_id={{env('MERCADOPAGO_APP_ID')}}&response_type=code&platform_id=mp&redirect_uri={{env('MERCADOPAGO_REDIRECT_URI')}}">
                <button class="btn btn-outline-info" >Vincular con MercadoPago</button>
            </a>
    </div>
</div>



@endSection