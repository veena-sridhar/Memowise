import {
  RECEIVE_DECKS,
  SELECT_DECK,
  RECEIVE_CARD,
  START_PLAY,
  FLIP_CARD,
  FINISH_PLAY,
  SIGN_IN,
  SIGN_OUT,
  ERR_FAILED_REQUEST,
  RECEIVE_COURSES,
  SELECT_COURSE,
  RECEIVE_STUDENTS,
  RECEIVE_STUDENT_DECKS,
  SELECT_STUDENT_DECK
} from '../constants/actionTypes';

import {
  FRONT,
  BACK,
} from '../constants/play';

export const decks = (state, action) => {
  switch (action.type) {
    case RECEIVE_DECKS: {
      return action.data || state;
    }
    default:
      return state || [];
  }
};

export const deck = (state, action) => {
  switch (action.type) {
    case SELECT_DECK: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const card = (state, action) => {
  switch (action.type) {
    case RECEIVE_CARD: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const play = (state, action) => {
  switch (action.type) {
    case START_PLAY: {
      if (!action.data ||
          !action.data.deckId ||
          !action.data.cardId) {
        return state;
      }

      const newPlay = {
        deckId: action.data.deckId,
        cardId: action.data.cardId,
        side: FRONT,
        rating: null,
      };

      return newPlay;
    }
    case FLIP_CARD:
      return { ...state, side: BACK };
    case FINISH_PLAY:
      if (action.data === undefined) {
        return state;
      }
      return { ...state, rating: action.data };
    default:
      return state || {};
  }
};

export const user = (state, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return action.data || state;
    }
    case SIGN_OUT: {
      return {};
    }
    default:
      return state || {};
  }
};

export const error = (state, action) => {
  switch (action.type) {
    case ERR_FAILED_REQUEST: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const courses = (state, action) => {
  switch (action.type) {
    case RECEIVE_COURSES: {
      return action.data || state;
    }
    default:
      return state || [];
  }
};

export const course = (state, action) => {
  switch (action.type) {
    case SELECT_COURSE: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const students = (state, action) => {
  switch (action.type) {
    case RECEIVE_STUDENTS: {
      return action.data || state;
    }
    default:
      return state || [];
  }
};

export const studentDecks = (state, action) => {
  switch (action.type) {
    case RECEIVE_STUDENT_DECKS: {
      return action.data || state;
    }
    default:
      return state || [];
  }
};

export const studentDeck = (state, action) => {
  switch (action.type) {
    case SELECT_STUDENT_DECK: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};
