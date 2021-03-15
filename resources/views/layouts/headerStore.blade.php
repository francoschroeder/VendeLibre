
@section('company_name')
    <a href="/store/{{$store->id}}">{{$store->name}}</a> 
@endsection

@section('phone')
    {{$store->phone}}
@endsection