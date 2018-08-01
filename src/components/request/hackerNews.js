import axios from "axios";

const hacker = {
  story: (id) => {
    return axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
  },
  listStory: (filter) => {
    return axios.get('https://hacker-news.firebaseio.com/v0/' + filter + 'stories.json')
  },
  newListStory: (filter, result, quantity) => {
    return hacker.listStory(filter)
    .then(response => {
      return Promise.all(response.data.splice(0, quantity).map((id) => {
        return hacker.story(id)
        .then(response => {
          return response.data
        })
      }))
    })
    .then(response => {
      result = response
      return result
    })
  }
};

export default hacker;
