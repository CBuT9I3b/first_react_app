import Axios from "axios";

const space = Axios.get('https://hacker-news.firebaseio.com/v0/item/17591816.json');

export default space;