import axios from "axios";

const hacker = {
  story: (id) => axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json'),
  new: () => axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
}

export default hacker;
