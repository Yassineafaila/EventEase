<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use App\Http\Resources\EventResource;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $events = Event::orderBy("created_at", "desc")->paginate(10);

        if ($events->isEmpty()) {
            return response()->json([
                'success' => true,
                'message' => 'No events found.',
                'data' => [],
            ]);
        }
        return
            response()->json([
                'success' => true,
                'data' => EventResource::collection($events),
                'pagination' => [
                    'current_page' => $events->currentPage(),
                    'per_page' => $events->perPage(),
                    'total' => $events->total(),
                    'last_page' => $events->lastPage(),
                ],
            ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        // Find the event by ID
        $event = Event::find($event->id);

        // Check if the event exists
        if (!$event) {
            return response()->json([
                'success' => false,
                'message' => 'Event not found.',
            ], 404); // Return a 404 Not Found status code
        }

        // Return a JSON response with the event data
        return response()->json([
            'success' => true,
            'data' => new EventResource($event),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        // Attempt to find and delete the event
        $event = Event::find($event->id);

        // Check if the event exists
        if (!$event) {
            return response()->json([
                'success' => false,
                'message' => 'Event not found.',
            ], 404); // Return a 404 Not Found status code
        }

        // Delete the event
        $event->delete();

        // Return a JSON response indicating success
        return response()->json([
            'success' => true,
            'message' => 'Event deleted successfully.',
        ]);
    }
}
