@extends('layouts.app')
@extends ('layouts.headerLogin')

@section('content')
<section class="hero-section">
    <div class="hero-items owl-carousel">
        <div class="single-hero-items">
            <div class="container">
                <h1>Error</h1>
                <p>{{$message}}</p>
            </div>
        </div>
    </div>
</section>

@endsection
