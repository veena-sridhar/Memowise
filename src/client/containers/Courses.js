import { connect } from 'react-redux';
import Courses from '../components/Courses';
import { fetchStudents, selectCourse } from '../actions';

const mapStateToProps = ({ courses }) => ({ courses });

const mapDispatchToProps = (dispatch) => ({
  fetchStudents: (courseId) => dispatch(fetchStudents(courseId)),
  selectCourse: (course) => dispatch(selectCourse(course))
});

export default connect(mapStateToProps)(Courses);