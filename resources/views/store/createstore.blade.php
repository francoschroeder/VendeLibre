@extends('layouts.app')

@section('title')
    Añadir Tienda
@endsection

@section('content')
<div class = "container">
	<form method = "POST" action="/createStore">
						
		@csrf
		<div class = "container">
			<div class="form-group row">
				<label for="example-text-input" class="col-2 col-form-label">Nombre</label>
				<div class="col-10">
					<input class="form-control" type="text" id="example-text-input" name = "name">
				</div>
				<label for="example-text-input" class="col-2 col-form-label">Descripcion</label>
				<div class="col-10">
					<input class="form-control" type="float" id="example-float-input" name = "description">
				</div>
				<label for="example-text-input" class="col-2 col-form-label">Telefono</label>
				<div class="col-10">
					<input class="form-control" type="float" id="example-float-input" name = "phone">
				</div>
				<label for="example-text-input" class="col-2 col-form-label">Longitud</label>
				<div class="col-10">
					<input class="form-control" type="float" id="example-float-input" name = "longitud">
				</div>
				<label for="example-text-input" class="col-2 col-form-label">Latitud</label>
				<div class="col-10">
					<input class="form-control" type="float" id="example-float-input" name = "latitud">
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

@endsection