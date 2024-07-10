export interface Event {
    id: string;
    name: string;
    description: string;
    location: {
        city: string,
        street: string,
        address: string

    };
    seats: number;
    start_time: string;
    end_time: string;
    organizer_id: string;
    created_at: string;
    updated_at: string;
}