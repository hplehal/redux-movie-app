import { connect } from "react-redux";
import MovieList from "../components/MovieList";

const mapStateToProps = (state) => {
    return { movies: state.movies };
}

export default connect(
    mapStateToProps
)(MovieList);