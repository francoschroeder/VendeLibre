@extends('layouts.app')
@extends ('layouts.headerLogin')
@section('title')
    Añadir Tienda
@endsection

@section('content')

	
	<form method = "POST" action="/createStore">			
			@csrf

			<!-- Shopping Cart Section Begin -->
			
			<div class="container">
				
					<div class="row">
						<div class="col-lg-6">
							<h3>Datos del Negocio</h3>
							<div class="row">
								<div class="col-lg-12">
									<label for="example-text-input">Nombre de la Tienda<span></span></label>
									<input class="form-control" type="text" id="example-text-input" name = "name">
								</div>
								<div class="col-lg-12">
									<label for="example-text-input">Descripcion</label>
									<input class="form-control" type="text" id="example-text-input" name = "description">
								</div>
								<div class="col-lg-12">
									<label for="example-text-input">Direccion<span></span></label>
								<input class="form-control" type="text" id="example-text-input" name = "direction">
								</div>
								<div class="col-lg-12">
									<label for="example-text-input">Email<span></span></label>
									<input class="form-control" type="text" id="example-text-input" name = "email">
								</div>
								<div class="col-lg-12">
									<label for="example-text-input">Telefono<span></span></label>
									<input class="form-control" type="text" id="example-text-input" name = "phone">
								</div>
								<div class="col-lg-12">
									<label for="example-float-input" >Longitud</label>
									<input class="form-control" type="float" id="example-flot-input" name = "longitud">
								</div>
								<div class="col-lg-12">
									<label for="example-float-input" >Latitud</label>
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
				
			
			</div>
			</form>

<!-- Shopping Cart Section End -->


@endsection