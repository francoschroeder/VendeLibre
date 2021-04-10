@extends('home')

@section('storeList')
<div class="row">
    <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
        <div class="filter-widget">
            <a href="https://auth.mercadopago.com.ar/authorization?client_id=3364711930325075&response_type=code&platform_id=mp&redirect_uri=https://vende-libre.herokuapp.com/vincular"><button>Vincular con MercadoPago</button></a>
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
</div>

@endSection