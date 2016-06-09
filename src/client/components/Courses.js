import React, { PropTypes } from 'react';
import CourseInfo from './CourseInfo';

// Presentational component that displays list of classes in teacher's view
const Courses = ({ courses }) => (
  <div className="container">
    <button>Add Class</button>
    <div>
      {courses.map(course =>
        <CourseInfo key={course._id} course={course} />
      )}
    </div>
  </div>
);

export default Courses;