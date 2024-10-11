import React from 'react'
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import CardGrid from '../components/CardGrid/CardGrid'
import EventsSelection from '../components/EventsSelection/EventsSelection'

const EventsPage = () => {
    return (
        <div>
            <CommonHeroComponent title="" Heading="OUR EVENTS" Para="Convallis vivamus at cras porta nibh velit Convallis vivamus at cras porta nibh velit" backgroundImg="/images/creatives/Events-Banner.jpg" />
            <CardGrid />
            <EventsSelection />
        </div>
    )
}

export default EventsPage