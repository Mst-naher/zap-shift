import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import WorkCard from '../WorkCard/WorkCard';
import Services from '../Services/Services';

import LiveUpdate from '../LiveUpdate/LiveUpdate';
import MarchantSatisfaction from '../MarchantSatisfaction/MarchantSatisfaction';


const loadData = () => fetch("/services.json").then(res => res.json());

const reviewsPromise = fetch('/reviews.json').then(res=>res.json());
const Home = () => {
  const dataPromise= loadData();
   console.log(dataPromise)
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={"Loading..."}>
        <HowItWorks dataPromise={dataPromise}></HowItWorks>
      </Suspense>
      <Brands></Brands>
      <section>
        <h1 className='mt-30 text-center text-xl lg:text-3xl font-bold text-gray-700 underline'>Live Update</h1>
        <LiveUpdate></LiveUpdate>
      </section>
      <section>
        <MarchantSatisfaction></MarchantSatisfaction>
      </section>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <section>
        <Suspense fallback={"Loading..."}>
          <Services dataPromise={dataPromise}></Services>
        </Suspense>
      </section>
    </div>
  );
};

export default Home;