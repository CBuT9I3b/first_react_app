import firebase from 'firebase/app';
import 'firebase/database';

var config = {
  apiKey: "AIzaSyBSCekjA1lXJuUdVTKpBuEVgSWu66yYeAU",
  authDomain: "react-personal-page.firebaseapp.com",
  databaseURL: "https://react-personal-page.firebaseio.com",
  projectId: "react-personal-page",
  storageBucket: "react-personal-page.appspot.com",
  messagingSenderId: "80700621798"
};

firebase.initializeApp(config);

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
