import Course from '../models/Course';

const addCourse = (req, res) => {
  return Course.create({
      courseName: req.body.courseName,
      teacherId: req.user._id //teacherID: '5758dd2a0fe3293550c9a40d'
    }).then(course => {
      const created = course.toObject();
      res.status(201).json(created);
    })
    .catch(error => {
      res
        .status(500)
        .type('json')
        .json({ error });
    });
};

const getCourses = (req, res) => {
  Course.find({teacherId: req.user._id}).then((courses) => {  //teacherID: '5758dd2a0fe3293550c9a40d' //currently, I think it may be the case that any authorized user could maliciously add courses for any othr user by swapping the other user's object ID into their cookie; this should perhaps be improved
    res
      .status(200)
      .type('json')
      .json(courses);
  });
};

const addStudentToCourse = (req, res) => {  
  Course.update(
    {_id:  req.params.courseId}, //ObjectId(
    {$addToSet: {studentIds: req.body._id}}
  ).then(course => {
    res.status(201).json(course);
  })
  .catch(error => {
    res
      .status(500)
      .type('json')
      .json({ error });
  });
};

const getStudentsForCourse = (req, res) => {
  Course.find({teacherId: req.user._id}).then((courses) => {  //teacherID: '5758dd2a0fe3293550c9a40d'
    res
      .status(200)
      .type('json')
      .json(courses);
  });
};

export default { addCourse, getCourses, addStudentToCourse, getStudentsForCourse };
