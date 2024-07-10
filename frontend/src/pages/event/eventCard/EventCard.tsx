import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Text, Flex, Button } from '@chakra-ui/react'
import { FaShareAlt, FaCalendarAlt } from "react-icons/fa";
import { MdChairAlt } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { Event } from '../../../shared/interface/event';

interface EventCardProps {
    event: Event;
}

function EventCard({ event }: EventCardProps):JSX.Element {
    return (
        <div>
            <Card maxW='sm'>
                <CardHeader  className='relative'>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='md'
                    />
                    <Text className='absolute bottom-0 left-0 flex items-center gap-3'>{ event.seats}
                        <MdChairAlt />
                    </Text>
                </CardHeader>
                <CardBody mt={'10'}>
                    <Flex mt='6' justifyContent={'space-between'} alignItems={'center'}>
                        <Text className='flex items-center lg:gap-2'><FaCalendarAlt />{new Date(event.start_time).toLocaleDateString()}</Text>
                        <Text className='flex items-center lg:gap-2'><FaLocationDot />{event.location.city}</Text>
                    </Flex>
                    <Flex mt='10' justifyContent={'space-between'} alignItems={'center'}>
                        <Heading as={'h2'} size='md' className='font-bold'>{event.name}</Heading>
                    </Flex>
                </CardBody>
                <CardFooter mt={'10'}>
                    <Flex justifyContent={'space-between'} width={'100%'} alignItems={'center'}>
                        <Button  className='underline'>
                            Book now
                        </Button>
                        <Button >
                            <FaShareAlt />
                        </Button>
                    </Flex>
                </CardFooter>
            </Card>
        </div>
    );
}

export default EventCard;
