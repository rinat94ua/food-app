import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/*  Global state of the app
*-  Search object
*-  Current recipe object
*-  Shopping list object
*-  Liked recipes
*/
const state = {};

const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput();
  console.log(query);
  

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for results
    searchView.clearInput();
    searchView.clearResultsList();
    renderLoader(elements.searchRes);


    // 4) Search for recipes
    await state.search.getResult();
    
    // Render result on  UI
    clearLoader();
    searchView.renderResuls(state.search.result);
  }
};

elements.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  controlSearch();
});