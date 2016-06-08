import React, { PropTypes } from 'react';

// Presentational component that displays list of classes in teacher's view
const ClassList = ({ classes }) => (
  <div className="container">
    <button>Add Class</button>
    <div>
      {classes.map(classInfo =>
        <ClassInfo key={classInfo._id} classInfo={classInfo} />
      )}
    </div>
  </div>
);

export default ClassList;