import {connect} from "react-redux";
import {fetchMovieTitle} from "../actions/index";
import searchBar from "../components/searchBar";

const mapStateToProps = state=> {
    return{
        value: state.value,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        submitSearch: query => dispatch(fetchMovieTitle(query.target.value))
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(searchBar);