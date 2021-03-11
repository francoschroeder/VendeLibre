@extends('layouts.app')

@section('title')
    Página Principal
@endsection

@section('content')
<link href="https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/bootstrap.min.css')}}" type="text/css">
<link rel="stylesheet" href="{{ asset('css/font-awesome.min.css')}}" type="text/css">
<link rel="stylesheet" href="{{ asset('css/themify-icons.css')}}" type="text/css">
<link rel="stylesheet" href="{{ asset('css/elegant-icons.css')}}" type="text/css">
<link rel="stylesheet" href="{{ asset('css/owl.carousel.min.css')}}" type="text/css">
<link rel="stylesheet" href="{{ asset('css/nice-select.css')}}" type="text/css">
<link rel="stylesheet" href="{{ asset('css/jquery-ui.min.css')}}" type="text/css">
<link rel="stylesheet" href="{{ asset('css/slicknav.min.css')}}" type="text/css">
<link rel="stylesheet" href="{{ asset('css/style.css')}}" type="text/css">

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
        <h1> {{$store->name}} </h1>
        <h2> {{$store->description}} </h2>
            
        
            <div class="card">
                <div style="width: 500px; height: 500px;">
                    {!! Mapper::render() !!}
                </div>
            </div>
        </div>  
    </div>
</div>

    <!-- Contact Section Begin -->
    <section class="contact-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="contact-title">
                        <h4>Contacto</h4>
                    </div>
                    <div class="contact-widget">
                        <div class="cw-item">
                            <div class="ci-icon">
                                <i class="ti-location-pin"></i>
                            </div>
                            <div class="ci-text">
                                <span>Direccion</span>
                                <p>{{$store->direction}}</p>
                            </div>
                        </div>
                        <div class="cw-item">
                            <div class="ci-icon">
                                <i class="ti-mobile"></i>
                            </div>
                            <div class="ci-text">
                                <span>Telefono</span>
                                <p>{{$store->phone}}</p>
                            </div>
                        </div>
                        <div class="cw-item">
                            <div class="ci-icon">
                                <i class="ti-email"></i>
                            </div>
                            <div class="ci-text">
                                <span>Email:</span>
                                <p>{{$store->email}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section End -->

    <script src="{{ asset('js/jquery-3.3.1.min.js')}}"></script>
    <script src="{{ asset('js/bootstrap.min.js')}}"></script>
    <script src="{{ asset('js/jquery-ui.min.js')}}"></script>
    <script src="{{ asset('js/jquery.countdown.min.js')}}"></script>
    <script src="{{ asset('js/jquery.nice-select.min.js')}}"></script>
    <script src="{{ asset('js/jquery.zoom.min.js')}}"></script>
    <script src="{{ asset('js/jquery.dd.min.js')}}"></script>
    <script src="{{ asset('js/jquery.slicknav.js')}}"></script>
    <script src="{{ asset('js/owl.carousel.min.js')}}"></script>
    <script src="{{ asset('js/main.js')}}"></script>

    

@endsection