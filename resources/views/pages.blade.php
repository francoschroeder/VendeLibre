@if (count($nombres))
    @foreach ($nombres as $item)          
        <p class="p-2 border-bottom">
        <a href="/store/{{$item->id}}">  {{ $item->name}}</a>
        </p>
    @endforeach             
@endif
