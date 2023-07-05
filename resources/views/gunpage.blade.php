@extends('layouts/main')

@section('head')
    @vite('resources/css/Gun.scss')
    @vite('resources/js/OrionTracker/OrionTracker.scss')
    @vite('resources/js/MasteryTracker/MasteryTracker.scss')
    @viteReactRefresh
    @vite('resources/js/Tracker.jsx')
@endsection

@section('content')

<div id="gun_page_render">

</div>

@endsection
