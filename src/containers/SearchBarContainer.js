import React from "react";
import { connect } from "react-redux";
import { fetchMovieTitle } from "../actions/index";
import SearchBar from "../components/searchBar";

const SearchBarContainer = ({ submitSearch, values, loading }) => {
  return (
    <SearchBar
      loading={loading}
      onSubmit={values => submitSearch(values.search)}
      onChange = {values => submitSearch(values.search)}
    />
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitSearch: query => dispatch(fetchMovieTitle(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarContainer);
