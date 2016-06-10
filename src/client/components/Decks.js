import React, { PropTypes } from 'react';
import _ from 'lodash';
import $ from 'jquery';
import DeckItem from './DeckItem';

const Decks = ({ decks }) => (
  <div className="container">
    <h4 className="center grey-text text-darken-4"> Decks</h4>
    <div className="card-list">
      <div className="card-columns">
        {_.map(decks, (deckSet, index) => {
            <h5>{index}</h5>
            _.map(deckSet, (deck, index) => {<DeckItem key={index} deck={deck} />});
          })
        }
      </div>
    </div>
  </div>
);

Decks.propTypes = {
  decks: PropTypes.array.isRequired,
};

export default Decks;




