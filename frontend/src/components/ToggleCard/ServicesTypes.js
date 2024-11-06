import React from 'react';
import Service from './Service';
import './ServicesTypes.css';

/*
    props: { 
        title: {
            defaultText : '',
            focusedText: ''
        }
        services : [] array, ->
            for box, 
            paragraph,
            heading,
            imageDefault - Path
            imageHovered - Path  
    }
*/

const ServicesTypes = ({services, title}) => {
  return (
    <section className='services_types_component'>
        <div className='container mt-2 mb-2'>
            <h2 className='development_types_heading mb-5'>{title.defaultText}<span>{title.focusedText}</span></h2>
            <div className='row ps-5 pe-5'>
                    {services.map((element) => {
                        return (
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                            <Service 
                                paragraph={element.paragraph} 
                                heading={element.heading}
                                imageDefault={element.imgDefault}
                                imageHovered={element.imgHovered}
                            />
                            </div>
                        )
                    })} 
            </div> 
        </div>
    </section>
  )
}

export default ServicesTypes;