import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesProvide = ({ services }) => {
  console.log(services);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white p-15">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default ServicesProvide;