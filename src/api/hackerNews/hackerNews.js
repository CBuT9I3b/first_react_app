import axios from "axios";

class HackerNewsApi {

  static getStory(id) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  }

  static getListStory(filter) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/${filter}stories.json`)
  }

  static getAllStory(filter, quantity) {
    return this.getListStory(filter)
      .then(response => {
        return Promise.all(response.data.splice(0, quantity).map((id) => {
          return this.getStory(id)
            .then(response => response.data)
        }))
      })
  }

}

export default HackerNewsApi;
