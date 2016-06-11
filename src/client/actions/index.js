import * as types from '../constants/actionTypes';
import Auth from '../services/AuthService';
import { config } from '../config';

export const failedRequest = error => ({ type: types.ERR_FAILED_REQUEST, data: error });

export const signIn = user => ({ type: types.SIGN_IN, data: user });
export const signOut = () => ({ type: types.SIGN_OUT });
export const verifyAuthentication = () => (
  dispatch => {
    Auth.verify()
      .then(user => dispatch(signIn(user)))
      .catch(err => dispatch(failedRequest(err)));
  });
export const cancelAuthentication = () => (
  dispatch => {
    Auth.signOut()
      .then(() => dispatch(signOut()))
      .catch(err => dispatch(failedRequest(err)));
  });

export const receiveDecks = decks => ({ type: types.RECEIVE_DECKS, data: decks });
export const selectDeck = deck => ({ type: types.SELECT_DECK, data: deck });
export const fetchDecks = () => (
  dispatch => (
    fetch('/api/decks', {
      credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(decks => dispatch(receiveDecks(decks)))
    .catch(err => dispatch(failedRequest(err)))
  ));

export const receiveCard = card => ({ type: types.RECEIVE_CARD, data: card });
export const fetchCard = (deckId) => {
  const payload = JSON.stringify({ deckId });

  return dispatch => (
    fetch('/api/card', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .then(card => dispatch(receiveCard(card)))
    .catch(err => dispatch(failedRequest(err)))
  );
};

export const startPlay = (cardId, deckId) => ({ type: types.START_PLAY, data: { cardId, deckId } });
export const flipCard = () => ({ type: types.FLIP_CARD });
export const savePlay = (play, rating) => {
  const payload = JSON.stringify({ ...play, rating });

  return dispatch => (
    fetch('/api/play', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(() => dispatch({ type: types.FINISH_PLAY, data: rating }))
    .catch(err => dispatch(failedRequest(err)))
  );
};

export const receiveCourses = courses => ({ type: types.RECEIVE_COURSES, data: courses });
export const selectCourse = course => ({ type: types.SELECT_COURSE, data: course });
export const fetchCourses = () => (
  dispatch => (
    fetch('/api/courses', {
      credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(courses => dispatch(receiveCourses(courses)))
    .catch(err => dispatch(failedRequest(err)))
  ));

export const addCourse = (courseName) => {
  const payload = JSON.stringify({ courseName });

  return dispatch => (
    fetch('/api/courses', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(() => dispatch({ type: types.ADD_COURSE, data: courseName }))
    .then(() => dispatch(fetchCourses()))
    .catch(err => dispatch(failedRequest(err)))
  );
};

export const receiveStudents = students => ({ type: types.RECEIVE_STUDENTS, data: students });
export const fetchStudents = (courseId) => {

  return dispatch => (
    fetch(`/api/courses/${courseId}/students`, {
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(students => dispatch(receiveStudents(students)))
    .catch(err => dispatch(failedRequest(err)))
  );
};

export const addStudent = (courseId, email) => {
  const payload = JSON.stringify({ email });

  return dispatch => (
    fetch(`/api/courses/${courseId}/students`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(() => dispatch({ type: types.ADD_STUDENT, data: email }))
    .then(() => dispatch(fetchStudents(courseId)))
    .catch(err => dispatch(failedRequest(err)))
  );
};


export const receiveStudentDecks = studentDecks => ({ type: types.RECEIVE_STUDENT_DECKS, data: studentDecks });
export const selectStudentDeck = studentDeck => {
  return { type: types.SELECT_STUDENT_DECK, data: studentDeck };
}
export const fetchStudentDecks = () => (
  dispatch => (
    fetch('/api/decks/courses', {
      credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(studentDecks => dispatch(receiveStudentDecks(studentDecks)))
    .catch(err => dispatch(failedRequest(err)))
  ));









