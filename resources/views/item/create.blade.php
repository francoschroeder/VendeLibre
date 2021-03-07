@extends('layouts.app')

@section('title')
    Añadir Item
@endsection

@section('content')
<div class = "container">
					<form method = "POST" action="/store/{id_store}/createItem">
						
								@csrf
								<div class = "container">
										<div class="form-group row">
												<label for="example-text-input" class="col-2 col-form-label">Item</label>
											<div class="col-10">
												<input class="form-control" type="text" id="example-text-input" name = "title">
												</div>
										</div>
										<div class="form-group row">
											<label for="example-date-input" class="col-2 col-form-label">Precio</label>
											<div class="col-10">
											<input class="form-control" type="number" min="0,00"  name="price">
											</div>
										</div>
										<div class="form-group row">
												<label for="example-number-input" class="col-2 col-form-label">Descripcion</label>
												<div class="col-10">
												<input class="form-control" type="text" id="example-text-input" name = "description">
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