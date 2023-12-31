import React from 'react';
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero />
      <CoursesList />
      <Footer/>
    </div>
  )
}

export default HomePage