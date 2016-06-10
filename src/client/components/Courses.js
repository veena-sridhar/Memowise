import React, { PropTypes } from 'react';
import AddCourse from '../containers/AddCourse';
import { browserHistory } from 'react-router';
import CourseInfo from './CourseInfo';

// Presentational component that displays list of classes in teacher's view
class Courses extends React.Component {
  constructor(props) {
    super(props);

    // this.handleCourseClick = this.handleCourseClick.bind(this);
  }

  // handleCourseClick(course) {
  //   console.log('course >>>>', course);
  //   this.props.dispatch(selectCourse(course))
  //   // this.props.onCourseClick(this.props.course);
  //   // this.props.fetchStudents(course._id);
  //   browserHistory.push(`/courses/${course._id}/students`);
  // }

  render() {
    return (
      <div className="container">
        <AddCourse />
        <div>
          {this.props.courses.map(course =>
            <CourseInfo 
            course={course}
            />
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