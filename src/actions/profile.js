import axios from 'axios';

import { GET_REPOS } from './types';

export const getGithubRepos = () => async (dispatch) => {
  try {
    const res = await axios.get('/profile');

    console.log('res', res);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
