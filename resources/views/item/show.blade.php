@extends('layouts.app')

@section('content')

	<h1 class = "title"> <p class="font-weight-bolder"> {{$thing -> title}} </p> </h1>

    @if($thing->items->count())
    <div class ="container">
        <ul class="list-group">
  
        @foreach($thing-> items as $item)
            <li> {{$item -> title}}  </li>
        @endforeach

        </ul>
    </div>
    @endif

@endsection