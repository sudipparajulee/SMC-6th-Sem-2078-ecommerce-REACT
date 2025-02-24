import React from 'react'

function ServiceCard({service}) {
  return (
    <div>
        <div className='bg-gray-200 p-4 shadow-sm rounded-md'>
            <h1 className='text-xl font-bold'>{service.title}</h1>
            <p>{service.description}</p>
        </div>
    </div>
  )
}

export default ServiceCard