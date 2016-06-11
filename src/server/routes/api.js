import { Router } from 'express';

// controllers
import decks from '../controllers/Decks';
import plays from '../controllers/Plays';
import courses from '../controllers/Courses';
import auth from '../controllers/Auth';

const router = new Router();

/*
 * Decks
 */
router.route('/api/decks').get(auth.checkAuthServer, decks.findAll);
router.route('/api/decks/courses').get(auth.checkAuthServer, decks.getDecksForStudent); 
router.route('/api/card').post(auth.checkAuthServer, decks.findNextCard);
router.route('/api/progress').post(auth.checkAuthServer, decks.progress);

/*
 * Plays
 */
router.route('/api/play').post(auth.checkAuthServer, plays.create);
router.route('/api/last-play/deck/:deckId').get(auth.checkAuthServer, plays.findLatest);

/*
 * Courses
 */
router.route('/api/courses').post(auth.checkAuthServer, courses.addCourse);
router.route('/api/courses').get(auth.checkAuthServer, courses.getCourses);
router.route('/api/courses/:courseId/students').post(auth.checkAuthServer, courses.addStudentToCourse);
router.route('/api/courses/:courseId/students').get(auth.checkAuthServer, courses.getStudentsForCourse);
router.route('/api/courses/:courseId/decks').post(courses.addDeckToCourse); 
router.route('/api/courses/:courseId/decks').get(auth.checkAuthServer, courses.getDecksForCourse); 


/*
 * Auth
 */
router.route('/api/auth/create-account').post(auth.createAccount);
router.route('/api/auth/sign-in').post(auth.signIn);
router.route('/api/auth/verify').get(auth.verify);
router.route('/api/auth/sign-out').get(auth.signOut);
router.route('/api/auth/check-authorized').get(auth.checkAuthorized);

export default router;
