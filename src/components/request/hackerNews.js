import axios from "axios";

const hacker = {
    new: () => axios.get('https://hacker-news.firebaseio.com/v0/newstories.json'),
    story: (id) => axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
}

export default hacker;
