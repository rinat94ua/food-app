import axios from 'axios';

// 9ec5473db896d35f05c91d8ba4bb3575
// http://food2fork.com/api/search

async function getResult(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const key = '9ec5473db896d35f05c91d8ba4bb3575';
  try {
    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&query=${query}`);
    const recipes = res.data.recipes;

    console.log(recipes);
  } catch (err) {
    console.log(err);
  }
}

getResult('pizza');