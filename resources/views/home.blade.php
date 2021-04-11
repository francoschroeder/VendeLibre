@extends('layouts.app')
@extends('layouts.headerLogin')

@section('content')
<section class="hero-section">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand">Buscar Tienda</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
    <div class="hero-items owl-carousel">
        <div class="single-hero-items">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <h1>Vende Libre</h1>
                        <p>Diseña tu página a tu gusto y vende facilmente todo tipo de productos</p>
                        <a href="/createStore" class="primary-btn">Crea tu Tienda</a>
                    </div>
                </div>
                <div class="off-card">
                    <h2>Sale <span>50%</span></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        @yield('storeList')
    </div>    
</section>

@endsection
