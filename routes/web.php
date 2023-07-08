<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     // dd(\Laravel\Sanctum\Sanctum::currentApplicationUrlWithPort());
//     return view('homepage');
// });

// Route::get('/tracker', function () {
//     return view('homepage');
// });

// Route::get('/about-us', function () {
//     return view('aboutus');
// });

Route::view('/{path?}', 'homepage')->where('path', '.*');
