<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Event extends Model
{
    use HasFactory;
    protected $table = 'events';
    protected $fillable = [
        'name',
        'description',
        'seats',
        'location',
        'start_time',
        'end_time',
        'organizer_id',
    ];
    protected $dates = [
        'start_time', 'end_time', // Specify date attributes
    ];

    /**
     * Get the user who organized this event.
     */
    public function organizer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'organizer_id');
    }

    /**
     * Get the speakers for this event.
     */
    public function speakers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'event_speakers');
    }

    /**
     * Get the attendees for this event.
     */
    public function attendees(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'event_attendees');
    }
}
