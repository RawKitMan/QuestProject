import { SET_THEME } from '../actions/types';
const initialState = {
  theme: 'Warrior'
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
}
