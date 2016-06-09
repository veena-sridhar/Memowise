import React, { PropTypes } from 'react';
import AddCourse from '../containers/AddCourse';

// Presentational component that displays list of classes in teacher's view
class Courses extends React.Component {
  constructor(props) {
    super(props);

  }

  getCourseInfo() {

  }

  render() {
    return (
      <div className="container">
        <AddCourse />
        <div>
          {this.props.courses.map(course =>
            <div>{course.courseName}</div>
          )}
        </div>
      </div>
    );
  }
}

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default Courses;