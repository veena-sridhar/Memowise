import React, { PropTypes } from 'react';
// import ClassTabs from './ClassTabs';
import AddStudent from '../containers/AddStudent';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { receiveStudents, failedRequest } from '../actions'

// const mapDispatchToState = (dispatch) => ({
//   setCourseState: (course) => dispatch(selectCourse(course))
// });

class StudentsTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {}
    }
  }

  componentDidMount() {
    fetch(`/api/courses/${this.props.params.courseId}/students`, {
      credentials: 'same-origin'
    })
    .then(res => res.json())
    // .then(students => {
    //   this.setState({course: students})
    // })
    .then(students => dispatch(receiveStudents(students)))
    .catch(err => dispatch(failedRequest(err)))
  }

  // componentDidMount() {
  //   const { dispatch, selectedCourse } = this.props
  //   dispatch(fetchStudentsIfNeeded(selectedCourse))
  // }

  // componentWillReceiveProps(nextProps) {
    
    
  //   this.props.students = nextProps;
    
  // }

  // componentDidMount() {
  //   this.props.fetchStudents(this.props.params.courseId)
  //   .then(course => {
  //     console.log('course in StudentsTab: ', course);
  //     this.setState({course: course.data});
  //   })
  // }

  render() {
    console.log('this.props.course: ', this.props.course);
    console.log('this.props.students: ', this.props.students);
    return (
      <div className="container">
        <h1>
          
        </h1>
        <AddStudent courseId={this.props.params.courseId} />
        <div>
          {this.props.students.map(student =>
            <span>
              <div>{student.name}</div>
              <div>{student.email}</div>
            </span>
          )}
        </div>
      </div>
    );
  }

  // render() {
  //   console.log('this.props.course: ', this.props.course);
  //   console.log('this.props.students: ', this.props.students);
  //   return (
  //     <div className="container">
  //       <AddStudent courseId={this.props.params.courseId} />
  //       <div>
  //         {this.props.students.map(student =>
  //           <span>
  //             <div>{student.name}</div>
  //             <div>{student.email}</div>
  //           </span>
  //         )}
  //       </div>
  //     </div>
  //   );
  // }

};

// StudentsTab.propTypes = {
//   students: PropTypes.array.isRequired,
// };

export default StudentsTab;
// export default connect(null, mapDispatchToState)(StudentsTab);