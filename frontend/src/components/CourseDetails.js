import React from 'react'
import courseData from './courseData'

function CourseDetails() {
  return (
    <div className="courseContainer"><h1 className='courseHeader'>{courseData[0].title}</h1>
    <img className="courseImage" src={courseData[0].image}  alt='...'></img>
   <div className='courseDeetsParent'> <p className='courseDeets'><h2>Course Objectives:</h2>
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
<br></br><br></br>
<h2>Week 1: Introduction to Content Writing</h2>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
<br></br>
<h2>Week 2-3: Writing Fundamentals</h2>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
<br></br>
<h2>Week 4-5: Understanding Online Content</h2>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
<br></br>
<h2>Week 6-7: Research Skills</h2>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
<br></br>
<h2>Week 8-9: Building Engaging Content</h2>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
<br></br>
<h2>Week 10-11: Freelance Writing and Career Opportunities</h2>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
<br></br>
<h2>Week 12: Final Projects and Career Preparation</h2>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
  )
}

export default CourseDetails