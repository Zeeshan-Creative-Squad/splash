import React from 'react';
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent';
import ToggleCards from '../components/ToggleCard/ToggleCards';
import MatchEvents from '../components/MatchEvents/MatchEvents';

const EventsPage = () => {
    return (
        <div>
            <CommonHeroComponent title="" Heading="OUR EVENTS" Para="Get ready for the ultimate showdown! Experience heart-pounding action"
                backgroundImg="/images/creatives/Events-Banner.jpg" />
            <ToggleCards />
            <MatchEvents />
        </div>
    );
};

export default EventsPage;