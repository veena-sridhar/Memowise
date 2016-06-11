import React, { PropTypes } from 'react';
import _ from 'lodash';
import DeckItem from './DeckItem';

const Decks = ({ studentDecks }) => (
  <div className="container">
    <h4 className="center grey-text text-darken-4">Decks</h4>
    <div className="card-list">
      <div className="card-row">
        {_.map(studentDecks, function (deckSet, key) {
          var decks = deckSet.map(function (deck, index) {return <DeckItem deck={deck} key={index}/>});
          console.log('decks:', decks);
          return(
            <div>
              <h5>{key}</h5>
              <div className="card-columns">{decks}</div>
            </div>
            )  
          })
        }
      </div>
    </div>
  </div>
);

export default Decks;
