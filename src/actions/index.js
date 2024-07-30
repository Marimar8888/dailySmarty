import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
  return function(dispatch) {
    axios.get('https://swapi.dev/api/people') //Acuerdate que hay que cambiarla cuando funciones por axios.get('https://api.dailysmarty.com/posts')
      .then(response => {
        console.log("response data fetchRecentPosts", response.data.results);
        dispatch({
          type: SET_RECENT_POSTS,
          payload: response.data.results
          // payload: response.data.posts (Tener en cuenta que la api de los post no funciona y estoy usando otra)
        })
      })
      .catch(error => {
        console.error("Error fetching posts", error);
      });
  };
}
