@extends('layouts.app')
@extends('layouts.headerLogin')

@section('content')
<section class="hero-section">
    <div class="hero-items owl-carousel">
        <div class="single-hero-items">
            <div class="container">
                <h1>¡Felicitaciones!</h1>
                <p>Su cuenta ha sido vinculada exitosamente con MercadoPago</p>
                <p>¡Ahora ya puede empezar a vender sus productos!</p>
                <a href="/createStore" class="primary-btn">Crea tu Tienda</a>
            </div>
        </div>
    </div>
</section>

@endsection