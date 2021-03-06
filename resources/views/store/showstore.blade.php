@extends('layouts.app')

@section('title')
    Página Principal
@endsection

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    ¡Bienvenido a VendeLibre!
                    <h1> {{$store->name}} </h1>

                 
         
                    @if($items->count())
                    <div class ="container">
                        <ul class="list-group">
                
                      
                        <li> {{$items -> title}} 
                        <h5> {{$items ->description}} </h5>
                        </li>
                      

                        </ul>
                    </div>
                    @endif

        
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection