import React, { PropTypes } from 'react';
import ClassTabs from './ClassTabs';

const StudentsTab = ({ classInfo }) => {
  let students = classInfo.students.map(student => 
    <div>{student.name}</div>
  );

  return (
    <div className="container">
      <div>{classInfo.name}</div>
      <ClassTabs />
      <button>Add Student</button>
      <div>
        {students}
      </div>
    </div>
  );
};

export default StudentsTab;