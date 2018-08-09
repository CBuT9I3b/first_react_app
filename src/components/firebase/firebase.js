import firebase from 'firebase/app';
import 'firebase/database';
import configFirebase from '../config/api_keys';

firebase.initializeApp(configFirebase);

var myFirebase = firebase.database();

const newsBase = {
  writeNews: (id, title, text, url, author, date) => {
    myFirebase.ref('news/' + id).set({
      id: id,
      title: title,
      text: text,
      url: url,
      author: author,
      date: date
    })
  },
  readNews: () => {
    myFirebase.ref('news').orderByKey().once('value')
    .then(snapshot => {
      snapshot.forEach(snapshotChild => {
        console.log(snapshotChild.val())
      })
    })
  }
}

export default newsBase;
