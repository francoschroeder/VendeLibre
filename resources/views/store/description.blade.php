@extends('layouts.navBar')
@extends('layouts.headerStore')
@section('title')
    Página Principal
@endsection

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
        <h1> {{$store->name}} </h1>
        <h2> {{$store->description}} </h2>
            
        
          
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
                <div class="col-lg-6 offset-lg-1">
                <div class="card">
                        <div style="width: 600px; height: 300px;">
                            {!! Mapper::render() !!}
                        </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section End -->


</div>
@endsection