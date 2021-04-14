@extends('layouts.app')
@extends('layouts.headerLogin')

@section('content')
<div class="col-8">
        <div class="input-group">
        <div class="input-group-append"><span class="input-group-text">Busca la Tienda que Necesitas</span></div>
            <input type="text" class="form-control" id="text" placeholder="Ingrese nombre">
        </div>
        <div id="resultados" class="bg-light border"></div>
    </div>
<section class="hero-section">
   
    <div class="hero-items owl-carousel">
        <div class="single-hero-items">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <h1>Vende Libre</h1>
                        <p>Diseña tu página a tu gusto y vende facilmente todo tipo de productos</p>
                        <a href="/createStore" class="primary-btn">Crea tu Tienda</a>
                    </div>
                </div>
                <div class="off-card">
                    <h2>Sale <span>50%</span></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        @yield('storeList')
    </div>
        
</section>
<script>
    window.addEventListener('load',function(){
        document.getElementById("text").addEventListener("keyup", () => {
            if((document.getElementById("text").value.length)>=1)
                fetch(`/search?text=${document.getElementById("text").value}`,{ method:'get' })
                .then(response  =>  response.text() )
                .then(html      =>  {   document.getElementById("resultados").innerHTML = html  })
            else
                document.getElementById("resultados").innerHTML = ""
        })
    });    

</script>
@endsection
