import firebase from 'firebase/app';
import 'firebase/database';
import CONFIG_FIREBASE from '../config';

firebase.initializeApp(CONFIG_FIREBASE);

var base = firebase.database();

const newsBase = {
  writeNews: item => {
    return base.ref('favNews/' + item.id).set(item)
  },
  readNews: quantity => {
    return base.ref('news').once('value')
      .then(snapshot => snapshot.val().splice(1, quantity))
  }
};

export default newsBase;
