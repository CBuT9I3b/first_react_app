import firebase from 'firebase/app';
import 'firebase/database';
import CONFIG_FIREBASE from '../config';

firebase.initializeApp(CONFIG_FIREBASE);

var myFirebase = firebase.database();

const newsBase = {
  writeNews: item => {
    return myFirebase.ref('favNews/' + item.id).set(item)
  },
  readNews: quantity => {
    return myFirebase.ref('news').once('value')
    .then(snapshot => snapshot.val().splice(1, quantity))
  }
}

export default newsBase;
