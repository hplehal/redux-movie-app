import { SECRET_KEY } from "../keys/keys";
const fetchMovieStart = value => ({
  type: "FETCH_MOVIES",
  payload: {
    loading: true,
    value
  }
});

const fetchMovieEnd = (movies, value) => ({
  type: "FETCH_MOVIES",
  payload: {
    loading: false,
    movies,
    value
  }
});

export const fetchMovieTitle = title => async dispatch => {
  dispatch(fetchMovieStart(title));
  try {
    let data = await (await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4851783a531664a8fc58abf098309ada&query=${title}`
    )).json();
    dispatch(fetchMovieEnd(data.results, title));
  } catch (e) {
    console.log(e);
  }
};
