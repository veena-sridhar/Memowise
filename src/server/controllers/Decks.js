import Deck from '../models/Deck';
import Course from '../models/Course';

import getCard from '../services/DeckProgress';
import getProgress from '../services/ProgressBar.js';

const findAll = (req, res) => {
  Deck.find({}).then((decks) => {
    res
      .status(200)
      .type('json')
      .json(decks);
  });
};

//get all classes
//reject those w/o the relevant student id
//for each one, iterate over the decks to build up that key value pair in the object
const getDecksForStudent = (req,res) => {
  Course.find()
  .then(courses => {
    console.log('courses:', courses);
    coursesForStudent = _.filter(courses, (course) => { //fuck it, do it w/ reduce
      return course.studentIds.indexOf() > -1; //req.user._id
    });
    console.log('coursesForStudent:', coursesForStudent);
    // coursesForStudent.reduce((response, course) => {
    // }, {});
  });
};

const findNextCard = (req, res) => {
  getCard(req.body.deckId, req.user._id).then(card => {
    res
      .status(200)
      .type('json')
      .json(card);
  });
};

const progress = (req, res) => {
  getProgress(req.body.deckId, req.user._id).then(percentage => {
    res
      .status(200)
      .type('json')
      .json(percentage);
  });
};

export default { findAll, findNextCard, progress, getDecksForStudent };
