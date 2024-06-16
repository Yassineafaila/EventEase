<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\VenueController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\SpeakerController;
use App\Http\Controllers\EventCategoryController;
use App\Http\Controllers\EventVenueController;
use App\Http\Controllers\EventSpeakerController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix("/api")->group(function () {
    Route::apiResource('events', EventController::class);
    Route::apiResource('tickets', TicketController::class);
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('venues', VenueController::class);
    Route::apiResource('feedback', FeedbackController::class);
    Route::apiResource('speakers', SpeakerController::class);
    Route::apiResource('event-categories', EventCategoryController::class);
    Route::apiResource('event-venues', EventVenueController::class);
    Route::apiResource('event-speakers', EventSpeakerController::class);
});
