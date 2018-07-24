import { connect } from "react-redux";
import MovieList from "../components/MovieList";

const mapStateToProps = ({ movies: state }) => {
    return { movies: state.movies };
}

export default connect(
    mapStateToProps
)(MovieList);