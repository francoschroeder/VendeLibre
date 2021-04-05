@extends('layouts.app')
@extends('layouts.headerLogin')

@section('content')
<section class="hero-section">
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
