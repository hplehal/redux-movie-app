//@flow
import React from "react";
import { reduxForm, Field } from "redux-form";
import "./searchBar.css";

//  />{console.log(values)}
// <input type="text" className="searchBar" onChange={e => submitSearch(e)} value={value}/>
//
//    <button className="button" type="submit">
//     <i className="fa fa-search" />
//   </button>
type Props = {
  value: any,
  loading: boolean,
  handleChange: any,
  handleSubmit: string => void
};

const SearchBar = ({ loading, handleSubmit, handleChange, value }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <p> Loading... </p>
      ) : (
        <div>
          <Field
            className="searchBar"
            name="search"
            component="input"
            type="text"
            value={value}
            onChange={handleChange}
          />
        </div>
      )}
    </form>
  );
};

export default reduxForm({ form: "SearchBar" })(SearchBar);
