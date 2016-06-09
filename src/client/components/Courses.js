import React, { PropTypes } from 'react';
import StudentsTab from './StudentsTab';

// Presentational component that displays list of classes in teacher's view
const Courses = ({ courses }) => (
  <div className="container">
    <button>Add Class</button>
    <div>
      {courses.map(course =>
        <StudentsTab key={course._id} course={course} />
      )}
    </div>
  </div>
);

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default Courses;