import {ADD_SEARCH_RESULT} from './actions';

const initialState = {
  searchResults: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        searchResults: [...state.searchResults, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
