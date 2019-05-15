import {FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR} from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: ''

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: [...state.characters, ...action.payload]
      };
    case FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload

      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

