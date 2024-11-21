import React from 'react'
import HeroComponentTwo from '../components/HeroComponentTwo/HeroComponentTwo';
import EventsInner from '../components/EventsInner/EventsInner';
import DigitalServices from '../components/360 Digital Services/DigitalServices';
import EventLocation from '../components/EventLocation/EventLocation';

const EventsInnerPage = () => {
    return (
        <div>
            <HeroComponentTwo title="" Heading="100M RACE" Para="Canadian Cheer Montréal Mayhem is a signature event in the heart of Montréal! This event brings together teams from across Ontario and" backgroundImg="/images/creatives/Events-Banner.jpg" />
            <EventsInner />
            <DigitalServices />
            <EventLocation />
        </div>
    )
}

export default EventsInnerPage;