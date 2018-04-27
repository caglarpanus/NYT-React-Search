import React from "react";

export const Searchresult = props =>
<div className="row searchResult">
  <div className="col-md-12">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
        <p>{props.snippet}</p>
        <a href={props.url} target="_blank">View Article</a>
        <button type="button" className="btn btn-outline-success float-right" {...props}>Save</button>
      </div>
    </div>
  </div>
</div>
