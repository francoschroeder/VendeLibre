@extends('layouts.app')
@section('navBar')
<div class="nav-item">
    <div class="container">
        <nav class="nav-menu mobile-menu">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a  href="/store/{{$store->id}}">Shop</a></li>
                <li><a href="/store/{{$store->id}}/contact">Contact</a></li>

                @if (Auth::check() && Auth::user()->id == $store->user_id)
                    <li><a href="/store/{{$store->id}}/addItem">Agregar Producto</a></li>
                    <li><a href="/store/{{$store->id}}/edit">Editar Pagina</a> </li>               
            </ul>
        </nav>
        <div class="nav-depart">
            <div class="depart-btn">
                <i class="ti-menu"></i>
                <span>Mis Tiendas</span>
                <ul class="depart-hover">
                    @foreach(Auth::user()->stores as $store)
                        <li><a href="/store/{{$store->id}}">{{$store->name}}</a></li>
                    @endforeach
                </ul>
            </div>
        </div>
                                
                @endif     
    </div>
</div>

@endsection