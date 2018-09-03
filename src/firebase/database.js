import { database } from "./firebase";

const favNewsBase = {
  writeNews: item => {
    return database.ref('favNews/' + item.id).set(item)
  },
  readNews: quantity => {
    return database.ref('favNews/')
      .limitToFirst(quantity)
      .once('value')
      .then(snapshot => Object.values(snapshot.val()))
  }
};

export default favNewsBase;
