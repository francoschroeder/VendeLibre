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
                    <h1> {{$item->title}} </h1>

                    @foreach($items as $item)
                        <h5> {{$item->title}} </h5>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection