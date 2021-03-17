@extends('layouts.navBar')
@extends('layouts.headerStore')

@section('title')
    Añadir Item
@endsection

@section('content')
<div class = "container">
					<form method = "POST" action="/store/{{$store->id}}/addItem">
						
								@csrf
								<div class = "container">
										<div class="form-group">
												<label for="example-text-input" class="col-2 col-form-label">Item</label>
											<div class="col-10">
												<input class="form-control" type="text" id="example-text-input" name = "title">
												</div>
										</div>
										<div class="form-group">
											<label for="example-date-input" class="col-2 col-form-label">Precio</label>
											<div class="col-10">
											<input class="form-control" type="number" min="0,00"  name="price">
											</div>
										</div>
										<div class="form-group">
												<label for="example-texy-input" class="col-2 col-form-label">Caracteristicas</label>
												<div class="col-10">
												<input class="form-control" type="text" id="example-text-input" name = "description" rows="3">
												</div>
												<div class="form-group">
												<label for="exampleFormControlFile1">Example file input</label>
												<input type="file" class="form-control-file" id="exampleFormControlFile1">
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