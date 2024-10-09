import React from 'react'
import Events from '../components/Events/Events'
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import CardGrid from '../components/CardGrid/CardGrid'

const EventsPage = () => {
    return (
        <div>
            <CommonHeroComponent title="" Heading="OUR EVENTS" Para="Convallis vivamus at cras porta nibh velit Convallis vivamus at cras porta nibh velit" backgroundImg="/images/creatives/AboutHero-Banner.jpg" />
            <CardGrid />

            <Events />
        </div>
    )
}

export default EventsPage