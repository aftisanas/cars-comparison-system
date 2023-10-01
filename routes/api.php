<?php

use App\Http\Controllers\Admin\ComparisonSystemController;
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

Route::get('/makes/{year}', [ComparisonSystemController::class, 'makes']);
Route::get('/models/{brand}', [ComparisonSystemController::class, 'models']);

Route::post('/compared', [ComparisonSystemController::class, 'compare'])->name('compared');
Route::post('/store-comparison', [ComparisonSystemController::class, 'store']);



