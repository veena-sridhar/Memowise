import React, { PropTypes } from 'react';
// import ClassTabs from './ClassTabs';
import AddStudent from '../containers/AddStudent';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { receiveStudents, failedRequest } from '../actions'

const mapStateToProps = ({ students }) => ({ students });

class StudentsTab extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    return fetch(`/api/courses/${this.props.params.courseId}/students`, {
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(students => this.props.dispatch(receiveStudents(students)))
  }

  render() {
    return (
      <div className="container">
        <h1>
          {this.props.students.courseName}
        </h1>
        <AddStudent courseId={this.props.params.courseId} />
        <div>
          {this.props.students.students.map(student =>
            <div>
              <span>{student.name} {student.email}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps)(StudentsTab);