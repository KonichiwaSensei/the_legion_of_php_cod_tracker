<?php

use App\Http\Controllers\Api\ChallengeController;
use App\Http\Controllers\Api\ProfileTokensController;
use App\Http\Controllers\Api\WeaponClassController;
use App\Http\Controllers\Api\WeaponController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('profiletokens', [ProfileTokensController::class, 'index']);
Route::post('profiletokens/validate', [ProfileTokensController::class, 'validateToken']);
// Route::get('profiletokens/generate', [ProfileTokensController::class, 'generate']);

// Route::get('weapon', [WeaponController::class, 'index']);
// Route::get('challenge', [ChallengeController::class, 'index']);
Route::get('weapons', [WeaponClassController::class, 'index']);
