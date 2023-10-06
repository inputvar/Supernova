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
    { title: 'Baking', image: bakingImage },
    { title: 'Cooking', image: cookingImage },
    { title: 'Gym', image: gymImage },
    { title: 'Instruments', image: instrumentsImage },
    { title: 'Language 1', image: language1Image },
    { title: 'Language', image: languageImage },
    { title: 'Literature 1', image: literature1Image },
    { title: 'Literature', image: literatureImage },
    { title: 'Painting', image: paintingImage },
    { title: 'Singing', image: singingImage },
    { title: 'Volleyball', image: volleyballImage },
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
                  <p className="card-text">Description of the course goes here.</p>
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