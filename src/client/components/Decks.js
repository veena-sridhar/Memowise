import React, { PropTypes } from 'react';
import _ from 'lodash';
import StudentDeckItem from './StudentDeckItem';

const Decks = ({ studentDecks }) => (
  <div className="container">
    <h4 className="center grey-text text-darken-4">Decks</h4>
    <div className="card-list">
      <div className="card-columns">
        {_.map(studentDecks, function (deckSet, key) {
            return deckSet.map(function (deck, index) { return <StudentDeckItem studentDeck={deck} /> })
          })
        }
      </div>
    </div>
  </div>
);

export default Decks;




//_.map(deckSet, function (deck, index) { return <DeckItem deck={deck} /> })

// <h5>{index}</h5>