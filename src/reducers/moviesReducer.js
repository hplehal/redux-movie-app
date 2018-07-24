const initialState = {
    movies: [],
    loading: false,
    value:''
}
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            const {movies, loading, value} = action.payload;
            if(loading){
                return{
                    ...state,
                    loading:true,
                    value
                }
            }
            return { 
                ...state,
                movies,
                loading: false,
                value
            }
        default:
           return state;
    }
}

export default moviesReducer;