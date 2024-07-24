/* import axios from 'axios';

export function fetchRecentPosts() {
  return function(dispatch) {
    axios
      .get('https://swapi.dev/api/people')
      .then(response => {
        console.log("response data fetchRecentPosts", response.data.results);
      })
  };
} */

import axios from 'axios';

export function fetchRecentPosts() {
  return function(dispatch) {
    axios.get('https://swapi.dev/api/people')
      .then(response => {
        console.log("response data fetchRecentPosts", response.data.results);
      })
      .catch(error => {
        console.error("Error fetching posts", error);
      });
  };
}
