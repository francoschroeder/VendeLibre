@extends('layouts.navBar')
@extends('layouts.headerStore')


@section('title')
    Página Principal
@endsection

@section('content')


<div class="container">
  <div class="row">
    <div class="col-sm-3">
      <img src="{{url($item->image)}}" alt="No hay Imagen"/>
    </div>
    <div class="col-sm-9">
      
        <div class="col-8 col-sm-6 p-2">
            <h1> {{$item->title}} </h1>
        </div>
        <div class="col-4 col-sm-6 p-2">
            <h5 class="p-1">$ {{$item->price}} </h5>
            <h5 class="p-1"> {{$item->description}} </h5>
            
            @if (!$no_token)
            <script
                src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
                data-preference-id={{$preference->id}}>
            </script>
            @endif
        </div>
      
    </div>
  </div>
</div>
@endsection