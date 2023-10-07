import React from 'react';
import styled from "styled-components";
import courseData from './courseData'
import { Link } from 'react-router-dom';


// import Tabs from "./Tabs";
// import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  // const {courses} = useCoursesContext();

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
