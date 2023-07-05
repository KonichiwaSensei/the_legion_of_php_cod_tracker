@extends('layouts/main')

@section('head')
    @vite('resources/css/Gun.scss')
    @vite('resources/js/OrionTracker/OrionTracker.scss')
    @vite('resources/js/MasteryTracker/MasteryTracker.scss')
    @viteReactRefresh
    @vite('resources/js/Home')
@endsection

@section('content')

<div id="root">
  
</div>

@endsection

