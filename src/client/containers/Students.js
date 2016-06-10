import React from 'react';
import { connect } from 'react-redux';
import StudentsTab from '../components/StudentsTab';
import { fetchStudents, selectCourse } from '../actions';

// class Students extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     const { dispatch, selectedCourse } = this.props
//     dispatch(fetchStudentsIfNeeded(selectedCourse))
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.selectedCourse !== this.props.selectedCourse) {
//       const { dispatch, selectedCourse } = nextProps
//       dispatch(fetchStudentsIfNeeded(selectedCourse))
//     }
//   }

//   handleChange(nextCourse) {
//     this.props.dispatch(selectCourse(nextCourse))
//   }
// }

const mapStateToProps = ({ students }) => ({ students });
const mapDispatchToProps = (dispatch) => ({
  fetchStudents: (courseId) => dispatch(fetchStudents(courseId)),
  selectCourse: (course) => dispatch(selectCourse(course))
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentsTab);