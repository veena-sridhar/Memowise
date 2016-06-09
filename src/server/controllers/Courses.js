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
  Course.find({teacherId: req.user._id}).then((courses) => {  
    res
      .status(200)
      .type('json')
      .json(courses);
  });
};

export default { addCourse, getCourses };
