import React, { PropTypes } from 'react';
// import ClassTabs from './ClassTabs';

const DecksTab = ({ decks }) => {

  return (
    <div className="container">
      <button>Add a Deck</button>
      <div>
        {decks}
      </div>
    </div>
  );
};

export default DecksTab;