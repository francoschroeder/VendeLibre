

        @extends('layouts.app')

@section('title')
    Página Principal
@endsection

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
        <h1> {{$store->name}} </h1>
        <h2> {{$store->description}} </h2>
        <h3> Telefono: {{$store->phone}} </h3>
            <div class="card">
                <div style="width: 500px; height: 500px;">
                    {!! Mapper::render() !!}
                </div>
            </div>
        </div>  
    </div>

     
</div>
@endsection