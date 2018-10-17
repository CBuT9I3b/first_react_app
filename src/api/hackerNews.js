import axios from "axios";

class HackerNewsApi {
  static getItem(id) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  }

  static getListStories(typeStory) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/${typeStory}stories.json`)
  }

  static getAllStories(typeStory, quantity) {
    return this.getListStories(typeStory)
      .then(response => {
        return Promise.all(response.data.splice(0, quantity).map((id) => {
          return this.getItem(id)
            .then(response => response.data)
        }))
      })
  }
}

export default HackerNewsApi;
