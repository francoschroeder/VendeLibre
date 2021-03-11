@extends('layouts.app')
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

@section('title')
    Añadir Tienda
@endsection

@section('content')
<section class="checkout-section spad">
	
						
		@csrf

		 <!-- Shopping Cart Section Begin -->
		
        <div class="container">
			<form method = "POST" action="/createStore">
                <div class="row">
                    <div class="col-lg-6">
                        <h3>Datos del Negocio</h3>
                        <div class="row">
                            <div class="col-lg-12">
                                <label for="fir">Nombre de la Tienda<span></span></label>
                                <input class="form-control" type="text" id="example-text-input" name = "name">
							</div>
							<div class="col-lg-12">
								<label for="example-text-input">Descripcion</label>
								<input class="form-control" type="text" id="example-float-input" name = "description">
							</div>
                            <div class="col-lg-12">
                                <label for="street">Direccion<span></span></label>
                               <input class="form-control" type="text" id="example-float-input" name = "direction">
                            
                            </div>
                            <div class="col-lg-12">
                                <label for="email">Email<span></span></label>
                                <input class="form-control" type="text" id="example-float-input" name = "email">
                            </div>
                            <div class="col-lg-12">
                                <label for="phone">Telefono<span></span></label>
                                <input class="form-control" type="text" id="example-float-input" name = "phone">
							</div>
							<div class="col-lg-12">
								<label for="example-text-input" >Longitud</label>
								<input class="form-control" type="float" id="example-float-input" name = "longitud">
							</div>
							<div class="col-lg-12">
								<label for="example-text-input" >Latitud</label>
								<input class="form-control" type="float" id="example-float-input" name = "latitud">
							</div>
							
                        </div>
                    </div>
				</div>
				<div>
					<button type="submit" class="btn btn-primary">Agregar</button>
				</div>
										
				<div>
				<ul>
					@foreach($errors->all() as $error)
						<br>
							<li>{{$error}}</li>
					@endforeach	
					</ul>
				</div>
			
            </form>
        </div>
</section>
<!-- Shopping Cart Section End -->


@endsection