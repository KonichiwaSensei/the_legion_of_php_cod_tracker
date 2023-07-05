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
  @vite('resources/js/Navigation/Header/Header-app.jsx')
  @viteReactRefresh
  @vite('resources/js/Modal/Modal.jsx')
  @viteReactRefresh
  @vite('resources/css/Global.scss')
  
</head>
<body>
    <div id="header-render">

    </div>
    
    @yield('content')
    
    <div id="footer-render">

    </div>

</body>
</html>