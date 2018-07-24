const initialState = {
    movies: [],
    loading: false,
    value: []
}
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            const {movies, loading, value} = action.payload;
            if(loading){
                return{
                    ...state,
                    value,
                    loading:true
                }
            }
            return { 
                ...state,
                movies,
                value,
                loading: false
            }
        default:
           return state;
    }
}

export default moviesReducer;