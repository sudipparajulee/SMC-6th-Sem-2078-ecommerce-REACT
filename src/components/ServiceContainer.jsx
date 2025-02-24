import React from 'react'
import ServiceCard from './ServiceCard'

function ServiceContainer() {
    const services = [
        {
            id: 1,
            title: "Service A",
            description: "this is description",
        },
        {
            id: 2,
            title: "Service B",
            description: "this is description",
        },
        {
            id: 3,
            title: "Service C",
            description: "this is description",
        },
        {
            id: 4,
            title: "Service D",
            description: "this is description",
        },
    ]
  return (
    <div>
        <h1 className='text-2xl font-bold text-center pt-4'>Our Services</h1>
        <p className='text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magnam?</p>
        <div className='grid grid-cols-4 gap-4 px-20 py-10'>
            {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
    </div>
  )
}

export default ServiceContainer