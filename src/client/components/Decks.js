import React, { PropTypes } from 'react';
import _ from 'lodash';
import DeckItem from './StudentDeckItem';

const Decks = ({ studentDecks }) => (
  <div className="container">
    <h4 className="center grey-text text-darken-4">Decks</h4>
    <div className="card-list">
      <div className="card-columns">
        {_.map(studentDecks, function (deckSet, index) {
            console.log('the index inside map is', index);
            return <h5>{index}</h5>
            _.map(deckSet, function (deck, index) { return <DeckItem key={index} deck={deck} /> }
          )})
        }
      </div>
    </div>
  </div>
);

export default Decks;




