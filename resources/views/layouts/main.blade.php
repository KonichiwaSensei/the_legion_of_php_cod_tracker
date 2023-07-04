<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>COD:MW2 Gun Tracker</title>
    
  @yield('head')
  @viteReactRefresh
  @vite('resources/js/Navigation/Footer/Footer-app.jsx')
  @viteReactRefresh
  @vite('resources/js/Navigation/Header/header-app.jsx')
  @vite('resources/css/Global.scss')
</head>
<body>
    <div id="header-app">

    </div>
    
    @yield('content')
    
    <div id="Footer-app">

    </div>

</body>
</html>