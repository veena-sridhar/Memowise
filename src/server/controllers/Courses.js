import Course from '../models/Course';

const addCourse = (req, res) => {
  return Course.create({
      name: req.body.name
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

export default { addCourse };
