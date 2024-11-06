import React from 'react'
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import CardGrid from '../components/CardGrid/CardGrid'
import EventsSelection from '../components/EventsSelection/EventsSelection'
import ToggleCards from '../components/ToggleCard/ToggleCards'

const EventsPage = () => {
    return (
        <div>
            <CommonHeroComponent title="" Heading="OUR EVENTS" Para="Get ready for the ultimate showdown! Experience heart-pounding action"
                backgroundImg="/images/creatives/Events-Banner.jpg" />
            <CardGrid />
            <ToggleCards />
            <EventsSelection />
        </div>
    )
}

export default EventsPage