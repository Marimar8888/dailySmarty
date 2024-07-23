import axios from 'axios';

export function fetchRecentPosts() {
  return function(dispatch) {
    axios
      .get('https://swapi.dev/api/people')
      .then(response => {
        console.log("response data fetchRecentPosts", response.data.results);
        // Aquí podrías despachar una acción para guardar los datos en el estado
      })
  };
}
