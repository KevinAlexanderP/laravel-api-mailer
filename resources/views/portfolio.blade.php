@extends('layout')

@section('title','portfolio')

@section('content')
<h1>
    portfolioItem

</h1>

<ul>
    @if($portfolio)
        @foreach ($portfolio as $portfolioItem)
            <li>
                {{$portfolioItem['title']}}
            </li>
        @endforeach
    @else
    <li>
        No hay proyecto
    </li>
    @endif
</ul>
@endsection