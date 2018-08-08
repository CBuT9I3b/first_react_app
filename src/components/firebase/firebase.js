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

var myBase = firebase.database();

function writeData(id, name, title) {
  myBase.ref('id/' + id).set({
    nameList: name,
    titleList: title
  });
};

export default writeData;
