//@flow
import React from "react";
import { Field, reduxForm } from "redux-form";
import "./searchBar.css";

// <input type="text" className="searchBar" onChange={e => submitSearch(e)} value={value} />
type Props = {
    value: any,
    loading: boolean,
    submitSearch: string => void
};
let searchBar =({
    value,
    submitSearch,
    loading
}:Props) => {
    return <form onSubmit={submitSearch}>
        {loading ? <p> Loading.... </p> : <div>
            <input type="text" className="searchBar" onChange={e => submitSearch(e)} value={value} />
            <Field name="search" component="input" type="text" />
            <button className="button" type="submit">
              <i className="fa fa-search" />
            </button>
          </div>}
      </form>;
};

searchBar = reduxForm({
  // a unique name for the form
  form: "searchBar"
})(searchBar);
export default searchBar;