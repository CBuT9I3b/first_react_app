import firebase from 'firebase/app';
import 'firebase/database';
import configFirebase from '../config/api_keys';

firebase.initializeApp(configFirebase);

var myFirebase = firebase.database();

const newsBase = {
  writeNews: (id, title, text, url, author, date) => {
    return myFirebase.ref('news/' + id).set({
      id: id,
      title: title,
      text: text,
      url: url,
      author: author,
      date: date
    })
  },
  readNews: () => {
    return myFirebase.ref('news').once('value')
    .then(snapshot => snapshot.val())
  }
}

export default newsBase;
