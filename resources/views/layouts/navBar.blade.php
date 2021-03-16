@extends('layouts.app')

@section('navBar')
<div class="nav-item">
                <div class="container">
                    
                    <nav class="nav-menu mobile-menu">
                        <ul>
                            <li><a href="/store/{{$store->id}}">Home</a></li>
                            <li><a href="./shop.html">Shop</a></li>
                            <li><a href="#">Collection</a>
                            </li>
                            
                            <li><a href="/store/{{$store->id}}/contact">Contact</a></li>
                            @guest
                            @else
                            <li><a href="/store/{{$store->id}}/addItem">Agregar Producto</a></li>
                            <li><a href="/store/{{$store->id}}/edit">Editar Pagina</a> </li>
                            @endguest
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                </div>
</div>

@endsection