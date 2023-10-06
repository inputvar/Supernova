import React from 'react';
import styled from "styled-components";
import bakingImage from '../images/courses/baking.jpeg';
import cookingImage from '../images/courses/cooking.jpeg';
import gymImage from '../images/courses/Gym.jpg';
import instrumentsImage from '../images/courses/isntruments.jpeg';
import language1Image from '../images/courses/language_1.jpeg';
import languageImage from '../images/courses/language.jpeg';
import literature1Image from '../images/courses/literature_1.png';
import literatureImage from '../images/courses/literature.png';
import paintingImage from '../images/courses/painting.png';
import singingImage from '../images/courses/singing.jpeg';
import volleyballImage from '../images/courses/volleyball.jpeg';


// import Tabs from "./Tabs";
// import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  // const {courses} = useCoursesContext();
  const courseData = [
    {
      title: 'Mastering Public Speaking',
      description: 'Build confidence, conquer stage fright, deliver powerful speeches.',
      filterType: 'Public Speaking',
    },
    {
      title: 'Presentation Mastery',
      description: 'Engage, influence through persuasive speeches, informative presentations.',
      filterType: 'Public Speaking',
    },
    {
      title: 'Storytelling for Impact',
      description: 'Craft narratives connecting with a lasting impression.',
      filterType: 'Public Speaking',
    },
    {
      title: 'Total Fitness Transformation',
      description: 'Achieve fitness goals, workouts, nutrition tips for a healthier you.',
      filterType: 'Physical Health',
    },
    {
      title: 'Yoga for Wellness',
      description: 'Discover yoga benefits, poses, mindfulness for well-being.',
      filterType: 'Physical Health',
    },
    {
      title: 'Nutrition Essentials',
      description: 'Understand nutrition, make balanced, healthier diet choices.',
      filterType: 'Physical Health',
    },
    {
      title: 'Classic Literature Explorations',
      description: 'Journey through timeless literary works, novels, poetry, plays.',
      filterType: 'Literature',
    },
    {
      title: 'Creative Writing Workshop',
      description: 'Unleash creativity with guided writing, storytelling skills.',
      filterType: 'Literature',
    },
    {
      title: 'Literature Analysis and Critique',
      description: 'Hone critical thinking, analyze literary texts, explore themes.',
      filterType: 'Literature',
    },
    {
      title: 'Effective Business Communication',
      description: 'Enhance professional communication, master email etiquette, workplace skills.',
      filterType: 'Communication Skills',
    },
    {
      title: 'Persuasive Communication Techniques',
      description: 'Learn persuasion, explore strategies to influence and convince effectively.',
      filterType: 'Communication Skills',
    },
    {
      title: 'Nonverbal Communication Mastery',
      description: 'Understand nonverbal cues, improve body language, facial expressions.',
      filterType: 'Communication Skills',
    },
    {
      title: 'Web Content Writing for Beginners',
      description: 'Start content writing journey, craft engaging web content, blog posts.',
      filterType: 'Content Writing',
    },
    {
      title: 'SEO Writing Strategies',
      description: 'Write SEO content, explore keyword research, on-page optimization.',
      filterType: 'Content Writing',
    },
    {
      title: 'Creative Writing for Marketing',
      description: 'Combine creativity, create persuasive marketing content.',
      filterType: 'Content Writing',
    },
    {
      title: 'Introduction to Acrylic Painting',
      description: 'Explore acrylic painting, learn basic techniques, color theory.',
      filterType: 'Hobbies',
    },
    {
      title: 'Sculpting with Clay',
      description: 'Get hands-on with clay sculpting, craft sculptures, pottery.',
      filterType: 'Hobbies',
    },
    {
      title: 'Digital Art and Illustration',
      description: 'Dive into digital art, master illustration techniques.',
      filterType: 'Hobbies',
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
                <img src={bakingImage} className="card-img-top" alt={course.title} />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <a href="#" className="btn btn-outline-dark btn-lg">Learn More</a>
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

export default CourseList