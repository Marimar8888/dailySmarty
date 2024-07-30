import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
  return function(dispatch) {
    axios.get('https://swapi.dev/api/people')
      .then(response => {
        console.log("response data fetchRecentPosts", response.data.results);
        dispatch({
          type: SET_RECENT_POSTS,
          payload: response.data
        })
      })
      .catch(error => {
        console.error("Error fetching posts", error);
      });
  };
}
