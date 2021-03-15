@extends('layouts.app')

@section('navBar')
<div class="nav-item">
                <div class="container">
                    
                    <nav class="nav-menu mobile-menu">
                        <ul>
                            <li class="active"><a href="./index.html">Home</a></li>
                            <li><a href="./shop.html">Shop</a></li>
                            <li><a href="#">Collection</a>
                            </li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="/store/{{$store->id}}/contact">Contact</a></li>
                            <li><a href="#">Pages</a>
                                
                            </li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                </div>
</div>

@endsection