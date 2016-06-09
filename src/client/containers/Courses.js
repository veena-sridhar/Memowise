import { connect } from 'react-redux';
import Courses from '../components/Courses';

const mapStateToProps = ({ courses }) => ({ courses });

export default connect(mapStateToProps)(Courses);