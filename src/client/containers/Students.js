import { connect } from 'react-redux';
import StudentsTab from '../components/StudentsTab';

const mapStateToProps = ({ students }) => ({ students });

export default connect(mapStateToProps)(StudentsTab);