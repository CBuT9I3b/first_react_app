import axios from 'axios';

export const TYPE_STORIES = {
  NEW: 'new',
  TOP: 'top',
  BEST: 'best',
  ASK: 'ask',
  SHOW: 'show',
  JOB: 'job'
}

export class HackerNewsApi {
  static getItem(id) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  }

  static getListStories(typeStories) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/${typeStories}stories.json`)
  }

  static getAllStories(typeStories, quantity) {
    return this.getListStories(typeStories)
      .then(response => {
        return axios.all(response.data.splice(0, quantity).map((id) => {
          return this.getItem(id)
            .then(response => response.data)
        }))
      })
  }
}
