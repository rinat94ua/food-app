import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResult() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '9ec5473db896d35f05c91d8ba4bb3575';
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
      // console.log(`from search class ${this.query}`);
      
      this.result = res.data.recipes;
      
    } catch (err) {
      console.log(err);
    }
  }
}