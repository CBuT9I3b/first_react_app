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
      response.data.slice(0, quantity).forEach(id => {
        hacker.story(id)
        .then(response => {
          result.push(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      })
    })
  }
};

export default hacker;
