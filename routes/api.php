<?php

use App\Http\Controllers\Api\ChallengeController;
use App\Http\Controllers\Api\ChallengeWeaponController;
use App\Http\Controllers\Api\ProfileChallengeController;
use App\Http\Controllers\Api\ProfileTokensController;
use App\Http\Controllers\Api\WeaponClassController;
use App\Http\Controllers\Api\WeaponController;
use App\Models\ChallengeWeapon;
use App\Models\ProfileChallengeCompletion;
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
// USER ID MIDDLEWARE
Route::middleware('auth:sanctum')->get('/user-id', function (Request $request) {
    return $request->user()->id;
});
Route::post('token-set', [ProfileTokensController::class, 'token_set']);

// Profile Tokens API endpoints //
// Get all profiletokens
Route::get('profiletokens', [ProfileTokensController::class, 'index']);
// Check API if token is there
Route::post('profiletokens/validate', [ProfileTokensController::class, 'validateToken']);
// Generate token test (not-used)
// Route::get('profiletokens/generate', [ProfileTokensController::class, 'generate']);

// Weapons API endpoints //
// Get all weapon classes with weapons and challenges
Route::get('weapons', [WeaponClassController::class, 'index']);
// Get the challenge_weapon relationship table (not-used)
// Route::get('challengeweapon', [ChallengeWeaponController::class, 'index']);

// Profile Completion API endpoints //
Route::get('profilecompletion/{profile_id}', [ProfileChallengeController::class, 'index'])->whereNumber('profile_id');
// Saving Profile Challenge Completions
Route::post('profilecompletion/store', [ProfileChallengeController::class, 'store']);