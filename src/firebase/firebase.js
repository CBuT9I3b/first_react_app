import firebase from 'firebase/app';
import 'firebase/database';
import CONFIG_FIREBASE from '../config';

firebase.initializeApp(CONFIG_FIREBASE);

const database = firebase.database();

export { database };
