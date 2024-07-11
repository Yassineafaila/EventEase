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
        'city',
        'street',
        'address',
        'start_time',
        'end_time',
        'organizer_id',
    ];
    protected $dates = [
        'start_time', 'end_time', // Specify date attributes
    ];
    protected $appends = ['location'];

    public function getLocationAttribute()
    {
        return [
            'city' => $this->city,
            'street' => $this->street,
            'address' => $this->address
        ];
    }

    /**
     * Get the user who organized this event.
     */
    public function organizer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'organizer_id');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'event_user')->withPivot('role');
    }

    public function speakers(): BelongsToMany
    {
        return $this->users()->wherePivot('role', 'speaker');
    }

    public function attendees(): BelongsToMany
    {
        return $this->users()->wherePivot('role', 'attendee');
    }
}
