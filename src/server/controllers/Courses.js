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
  User.findOne({email: req.body.email})
  .then(studentToAdd => {
    Course.update(
      {_id:  req.params.courseId},
      {$addToSet: {studentIds: studentToAdd._id}}
    )
    .then(course => {
      res.status(201).json({message: 'Student successfully added to course!'});
    })
    .catch(error => {
      res
        .status(500)
        .type('json')
        .json({ error });
    });
  })
  .catch(error => {
    res
      .status(500)
      .type('json')
      .json({ error });
  });
};

const getStudentsForCourse = (req, res) => { //currently any user who knew the course ID you could retrieve this info; for better security, you should need to be the appropriate teacher in order to retrieve your courses
  Course.findOne({_id: req.params.courseId})
  .then(course => {
    User.find(
      {_id: { $in: course.studentIds }}
    )
    .then(students => {
      const mappedStudents = students.map(student => {
        return {
          _id: student._id,
          name: student.name,
          email: student.email
        };
      });
      const response = {
        _id: course._id,
        courseName: course.courseName,
        students: mappedStudents
      };
      res
        .status(200)
        .type('json')
        .json(response);
      })
      .catch(error => {
      res
        .status(500)
        .type('json')
        .json({ error });
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
