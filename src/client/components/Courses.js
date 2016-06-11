import React, { PropTypes } from 'react';
import AddCourse from '../containers/AddCourse';
import CourseInfo from './CourseInfo';

// Presentational component that displays list of classes in teacher's view
const Courses = ({ courses }) => (
  <div className="container">
    <AddCourse />
    <div>
      {courses.map(course =>
        <CourseInfo 
        key={course._id}
        course={course}
        />
      )}
    </div>
  </div>
);

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default Courses;