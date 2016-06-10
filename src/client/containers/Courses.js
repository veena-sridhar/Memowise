import { connect } from 'react-redux';
import Courses from '../components/Courses';
import { selectCourse } from '../actions';

const mapStateToProps = ({ courses }) => ({ courses });
// const mapDispatchToProps = (dispatch) => ({
//   onCourseClick: course => {
//     dispatch(selectCourse(course));
//   }
// });

export default connect(mapStateToProps)(Courses);