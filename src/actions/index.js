import {SECRET_KEY} from "../keys/keys";
const fetchMovieStart = (value) => ({
    type: "FETCH_MOVIES",
    payload:{
        loading: true,
        value
    }
});

const fetchMovieEnd = (movies,value) => ({
    type: "FETCH_MOVIES",
    payload: {
        loading: false,
        movies,
        value
    }
});

export const fetchMovieTitle = title => async dispatch => {
    
    console.log(title);
    dispatch(fetchMovieStart(title));
    try{
        let data = await (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${SECRET_KEY}&query=${title}`)).json();
        console.log(dispatch(fetchMovieEnd(data.results)));
        dispatch(fetchMovieEnd(data.results, title));
    }
    catch(e){
        return console.log(e);
    }
}