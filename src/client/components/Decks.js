import React, { PropTypes } from 'react';
import _ from 'lodash';
import StudentDeckItem from './StudentDeckItem';

const Decks = ({ studentDecks }) => (
  <div className="container">
    <h4 className="center grey-text text-darken-4">Decks</h4>
    <div className="card-list">
      <div className="card-columns">
        {_.map(studentDecks, function (deckSet, key) {
          var decks = deckSet.map(function (deck, index) {return <StudentDeckItem studentDeck={deck} />});
          console.log('decks:', decks);
          return(
            <div>
              <h5>{key}</h5>
              <div>{decks}</div>
            </div>
            )  
          })
        }
      </div>
    </div>
  </div>
);

export default Decks;




//_.map(deckSet, function (deck, index) { return <DeckItem deck={deck} /> })

// <h5>{index}</h5>

            // return
            // deckSet.map(function (deck, index) { return 
            //   <h5>{key}</h5>
            //   <StudentDeckItem studentDeck={deck} /> 
            // }))