import React, { use } from 'react';
import ServicesProvide from '../ServicesProvide/ServicesProvide';

const Services = ({ dataPromise }) => {
  const services = use(dataPromise)
  console.log(services);
  return (
    <div className='bg-secondary rounded-md p-4 text-white text-center py-10'>
      <h1 className='font-bold lg:text-3xl m-2'>Our Services</h1>
      <p className='font-semibold lg:text-xl mb-5'>
        Enjoy fast reliable parcel delevery with real-time tracking and zero
        hours
      </p>
      <ServicesProvide services={services}></ServicesProvide>
    </div>
  );
};

export default Services;
