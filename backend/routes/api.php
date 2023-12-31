<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuftragsController;
use App\Http\Controllers\CostCenterController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\UserController;
use App\Models\CostCenter;

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

Route::post('/login', [AuthController::class, 'auth']);
Route::post('register', [AuthController::class, 'register']);
Route::get('/users', [UserController::class, 'fetch']);
Route::get('/documents', [DocumentController::class, 'fetch']);
Route::post('/create-document', [DocumentController::class, 'store']);
Route::get('/cost', [CostCenterController::class, 'fetch']);
Route::get('/user/{id}', [UserController::class, 'fetchIndividual']);
Route::post('/update-cost', [CostCenter::class, 'update']);