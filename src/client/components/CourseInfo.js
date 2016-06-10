import React from 'react';
import { selectCourse } from '../actions';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

const mapDispatchToState = (dispatch) => ({
  setCourseState: (course) => dispatch(selectCourse(course)),
});

class CourseInfo extends React.Component {
  constructor(props) {
    super(props);

    this.handleCourseClick = this.handleCourseClick.bind(this);
  }

  handleCourseClick() {
    console.log('course >>>>', course);
    this.props.dispatch(selectCourse(course))
    // this.props.onCourseClick(this.props.course);
    // fetch(`/api/courses/${this.props.params.courseId}/students`, {
    //   credentials: 'same-origin'
    // })
    // .then(res => res.json())
    // // .then(students => {
    // //   this.setState({course: students})
    // // })
    // .then(students => dispatch(receiveStudents(students)))
    // .catch(err => dispatch(failedRequest(err)))
    browserHistory.push(`/courses/${this.props.course._id}/students`);
  }

  render() {
    return (
      <div className="container">
        <div onClick={this.handleCourseClick} >{this.props.course.courseName}</div>
      </div>
    );
  }
}

// export default CourseInfo
export default connect(null, mapDispatchToState)(CourseInfo);