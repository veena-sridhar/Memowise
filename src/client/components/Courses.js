import React, { PropTypes } from 'react';
import AddCourse from '../containers/AddCourse';
import { browserHistory } from 'react-router';

// Presentational component that displays list of classes in teacher's view
class Courses extends React.Component {
  constructor(props) {
    super(props);

    this.getCourseInfo = this.getCourseInfo.bind(this);
  }

  getCourseInfo(course) {
    console.log('course >>>>', course);
    // this.props.onCourseClick(this.props.course);
    browserHistory.push(`/courses/${course._id}/students`);
  }

  render() {
    return (
      <div className="container">
        <AddCourse />
        <div>
          {this.props.courses.map(course =>
            <div onClick={() => {this.getCourseInfo(course)}}>{course.courseName}</div>
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