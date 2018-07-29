import axios from "axios";

const hacker = {
  story: (id) => axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json'),
  listStory: (filter) => axios.get('https://hacker-news.firebaseio.com/v0/' + filter + 'stories.json')
};

export default hacker;
