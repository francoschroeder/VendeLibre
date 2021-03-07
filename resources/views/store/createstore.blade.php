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
			</div>
			<div class="form-group row">
				<label for="example-number-input" class="col-2 col-form-label">ID de Usuario</label>

				<div class="col-10">
					<input class="form-control" type="number" name = "user_id">
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