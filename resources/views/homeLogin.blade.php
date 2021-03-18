@extends('home')

@section('storeList')
<div class="row">
                <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
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
    </div>

@endSection