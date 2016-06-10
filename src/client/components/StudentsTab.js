import React, { PropTypes } from 'react';
// import ClassTabs from './ClassTabs';
import AddStudent from '../containers/AddStudent';

class StudentsTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props.students: ', this.props.students);
    return (
      <div className="container">
        <AddStudent />
        <div>
          {this.props.students.map(student =>
            <div>{student.name}</div>
          )}
        </div>
      </div>
    );
  }

};

StudentsTab.propTypes = {
  students: PropTypes.array.isRequired,
};

export default StudentsTab;