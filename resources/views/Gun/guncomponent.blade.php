@extends('gunpage')

@section('head')
    @vite('resources/js/GunPage/Gun.scss')
    @vite('resources/js/OrionTracker/OrionTracker.scss')
    @vite('resources/js/MasteryTracker/MasteryTracker.scss')
    @viteReactRefresh
    @vite('resources/js/GunPage/GunPage.jsx')
@endsection

@section('content')

<div id="gun_page_render">

</div>

@endsection