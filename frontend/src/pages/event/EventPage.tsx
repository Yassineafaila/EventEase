import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'
import { Event } from '../../shared/interface/event';
import EventCard from './eventCard/EventCard';
import EventList from './eventList/EventList';
function EventPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:3000/events');
        const data = response.data;
        setEvents(data);
      } catch (error) {
        console.log("error in fetching data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents()
  }, [])
  console.log(events)
  return (
    <div className='container mx-auto max-w-[1280px]'>

      <div>
        {/* filter the events */}
      </div>
      <div>
        {
          isLoading ? <Spinner />
            :
            events.length !== 0 ? <EventList>
              {
                events.map((event: Event) => {
                  return (
                    <EventCard key={event.id} event={event} />
                  )
                })
              }
            </EventList>
              : <div>No Data</div>
        }
      </div>
    </div>
  )
}

export default EventPage