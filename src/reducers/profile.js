import { GET_REPOS } from '../actions/types';

const initialState = { repos: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
      };
    default:
      return state;
  }
}
