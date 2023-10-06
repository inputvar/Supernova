import React from 'react';
import styled from "styled-components";
import classicLiteratureImage from '../images/courses/classic_litrature.jpg';
import creativeWritingImage from '../images/courses/creative_writing.jpg';
import criticLiteratureImage from '../images/courses/crictic_literature.jpg';
import masteringPublicSpeakingImage from '../images/courses/mastering_public_speaking.jpg';
import presentationMasteryImage from '../images/courses/presentation_mastery.jpg';
import storytellingImage from '../images/courses/storytelling.jpg';
import { Link } from 'react-router-dom';


// import Tabs from "./Tabs";
// import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  // const {courses} = useCoursesContext();
  const courseData = [
    {
      title: 'mastering public_speaking',
      description: 'Build confidence, conquer stage fright, deliver powerful speeches.',
      filterType: 'Public Speaking',
      image: masteringPublicSpeakingImage,
    },
    {
      title: 'presentation mastery',
      description: 'Engage, influence through persuasive speeches, informative presentations.',
      filterType: 'Public Speaking',
      image: presentationMasteryImage,
    },
    {
      title: 'Storytelling for Impact',
      description: 'Craft narratives connecting with a lasting impression.',
      filterType: 'Public Speaking',
      image: storytellingImage,
    },
    {
      title: 'Total Fitness Transformation',
      description: 'Achieve fitness goals, workouts, nutrition tips for a healthier you.',
      filterType: 'Physical Health',
      image: classicLiteratureImage,
    },
    {
      title: 'Yoga for Wellness',
      description: 'Discover yoga benefits, poses, mindfulness for well-being.',
      filterType: 'Physical Health',
      image: creativeWritingImage,
    },
    {
      title: 'Nutrition Essentials',
      description: 'Understand nutrition, make balanced, healthier diet choices.',
      filterType: 'Physical Health',
      image: criticLiteratureImage,
    },
    {
      title: 'classic literature Explorations',
      description: 'Journey through timeless literary works, novels, poetry, plays.',
      filterType: 'Literature',
      image: classicLiteratureImage,
    },
    {
      title: 'Creative writing Workshop',
      description: 'Unleash creativity with guided writing, storytelling skills.',
      filterType: 'Literature',
      image: creativeWritingImage,
    },
    {
      title: 'Literature Analysis and Critique',
      description: 'Hone critical thinking, analyze literary texts, explore themes.',
      filterType: 'Literature',
      image: criticLiteratureImage,
    },
    {
      title: 'Effective Business Communication',
      description: 'Enhance professional communication, master email etiquette, workplace skills.',
      filterType: 'Communication Skills',
      image: masteringPublicSpeakingImage,
    },
    {
      title: 'Persuasive Communication Techniques',
      description: 'Learn persuasion, explore strategies to influence and convince effectively.',
      filterType: 'Communication Skills',
      image: presentationMasteryImage,
    },
    {
      title: 'Nonverbal Communication Mastery',
      description: 'Understand nonverbal cues, improve body language, facial expressions.',
      filterType: 'Communication Skills',
      image: storytellingImage,
    },
    {
      title: 'Web Content Writing for Beginners',
      description: 'Start content writing journey, craft engaging web content, blog posts.',
      filterType: 'Content Writing',
      image: storytellingImage,
    },
    {
      title: 'SEO Writing Strategies',
      description: 'Write SEO content, explore keyword research, on-page optimization.',
      filterType: 'Content Writing',
      image: storytellingImage,
    },
    
    {
      title: 'Creative writing for Marketing',
      description: 'Combine creativity, create persuasive marketing content.',
      filterType: 'Content Writing',
      image: storytellingImage,
    },
    {
      title: 'Introduction to Acrylic Painting',
      description: 'Explore acrylic painting, learn basic techniques, color theory.',
      filterType: 'Hobbies',
      image: storytellingImage,
    },
    {
      title: 'Sculpting with Clay',
      description: 'Get hands-on with clay sculpting, craft sculptures, pottery.',
      filterType: 'Hobbies',
      image: storytellingImage,
    },
    {
      title: 'Digital Art and Illustration',
      description: 'Dive into digital art, master illustration techniques.',
      filterType: 'Hobbies',
      image: storytellingImage,
    },
  ];
  
  

  return (
    <CoursesListWrapper>
      <div className='container'  >
        <div className='courses-list-top'>
          {/* <h2>A selection of courses that match your interests</h2> */}
          {/* <p>Choose from 204,000 online video courses with new additions publihsed every month</p> */}
        </div>

        {/* <Tabs courses = {courses} /> */}

        <div>
      <h1 className="fw-7 courseSection">A selection of courses that match your interests</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courseData.map((course, index) => (
            <div className="col" key={index}>
              <div className="card">
                <img src={course.image} className="card-img-top" alt={course.title} />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <Link to="/coursePage" className="btn btn-outline-dark btn-lg">Learn More</Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      </div>
    </CoursesListWrapper>
  )
}

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
  }
`;

export default CourseList;
