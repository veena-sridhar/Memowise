import Course from '../models/Course';

const addCourse = (req, res) => {
  return Course.create({
      name: req.body.name,
      teacherId: req.user._id //req.user._id
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
  Course.find({teacherId: req.user._id}).then((courses) => {  //teacherID: '5758dd2a0fe3293550c9a40d'

    console.log(courses);

    res
      .status(200)
      .type('json')
      .json(courses);
  });
};

export default { addCourse, getCourses };
