import { database } from "./firebase";

class DataBaseApi {

  static setStory(item) {
    return database.ref(`favNews/${item.id}`).set(item)
  }

  static getStory(quantity) {
    return database.ref('favNews/')
      .limitToFirst(quantity)
      .once('value')
      .then(snapshot => Object.values(snapshot.val()))
  }

}

export default DataBaseApi;
