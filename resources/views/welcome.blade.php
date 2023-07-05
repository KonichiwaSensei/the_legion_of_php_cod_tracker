<<<<<<< HEAD
@extends('layouts/main')

@section('head')
    @vite('resources/css/Gun.scss')
    @vite('resources/js/OrionTracker/OrionTracker.scss')
    @vite('resources/js/MasteryTracker/MasteryTracker.scss')
    @viteReactRefresh
@endsection

@section('content')

<div>Hello World</div>

@endsection

=======
<!DOCTYPE html>
<html>
  <head>
    <title>React Laravel App...</title>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/App.jsx'])

  </head>
  <body>
    <div id="root"></div>
   
  </body>
</html>
>>>>>>> feat/Gonzo
