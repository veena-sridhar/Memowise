import Deck from '../models/Deck';
import Course from '../models/Course';

import getCard from '../services/DeckProgress';
import getProgress from '../services/ProgressBar.js';

// const async = require('async');

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
//flatten to [{deck, course], ... (one for each course)}
//for each one, iterate over the decks to build up that key value pair in the object (async map)
const getDecksForStudent = (req,res) => {
  Course.find()
  .then(courses => {
    const coursesForStudent = courses.reduce((filtered, course) => { 
      if (course.studentIds.indexOf(req.user._id) > -1) { 
        filtered.push(course);
      }
      return filtered; 
    }, []);

    Deck.find()
    .then(decks => {
      let toSend = coursesForStudent.reduce((response, course) => {
        let decksWithNames = course.deckIds.map(deckId => {
          let deckName = decks.reduce((deckName, possiblyMatchingDeck) => {
            if (deckId.toString() === possiblyMatchingDeck._id.toString()) {
              return possiblyMatchingDeck.name;
            }
            return deckName;
          }, null);
          return {_id: deckId, name: deckName};
        });
        response[course.courseName] = decksWithNames;
        return response;
      }, {});

      res
        .status(200)
        .type('json')
        .json(toSend);
    });
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
