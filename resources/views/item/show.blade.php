@extends('layouts.navBar')
@extends('layouts.headerStore')


@section('title')
    Página Principal
@endsection

@section('content')


<div class="container">
  <div class="row">
    <div class="col-sm-3">
      Imagen
    </div>
    <div class="col-sm-9">
      
        <div class="col-8 col-sm-6">
            <h1> {{$item->title}} </h1>
        </div>
        <div class="col-4 col-sm-6">
            <h5> {{$item->price}} </h5>
            <h5> {{$item->description}} </h5>
            <script
                        src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
                        data-preference-id="1">
                    </script>
        </div>
      
    </div>
  </div>
</div>
@endsection