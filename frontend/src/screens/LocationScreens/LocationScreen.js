import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
// import HeroBanner from '../../components/Common Banner Component/HeroBanner';
import LocationListings from './LocationListings';
import CommonHeroComponent from '../../components/CommonHeroComponent/CommonHeroComponent';

const LocationScreen = () => {
    return (
        <Fragment>
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <CommonHeroComponent 
         Heading="LOCATION PAGES"
         Para="Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et elit. Suspendisse variu"
         backgroundImg="/images/creatives/blogs-hero.jpg"/>
            <LocationListings />
        </Fragment>
    )
};

export default LocationScreen;