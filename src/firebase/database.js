import { database } from "./firebase";

const favNewsBase = {
  writeNews: item => {
    return database.ref('favNews/' + item.id).set(item)
  },
  readNews: quantity => {
    return database.ref('news').once('value')
      .then(snapshot => snapshot.val().splice(1, quantity))
  }
};

export default favNewsBase;
