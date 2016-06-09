import Course from '../models/Course';
import User from '../models/User';

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
  Course.find({teacherId: req.user._id}).then((courses) => {  
    res
      .status(200)
      .type('json')
      .json(courses);
  })
  .catch(error => {
    res
      .status(500)
      .type('json')
      .json({ error });
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
  Course.findOne({_id: req.params.courseId})
  .then(course => {
    console.log(course);
    // studentsToFind = course.studentIds.map()
    User.find(
      {_id: { $in: [course.studentIds] }}
    )
    .then(students => {
      console.log(students);
      course.students = students;
      res
        .status(200)
        .type('json')
        .json(course);
    });
  })
  .catch(error => {
    res
      .status(500)
      .type('json')
      .json({ error });
  });
};

//will need to get course for both students and for decks, so that should be its own thing
//can chain on the appropriate then 

export default { addCourse, getCourses, addStudentToCourse, getStudentsForCourse };
