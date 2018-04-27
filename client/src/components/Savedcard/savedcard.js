import React from "react";

export const Savedcard = props =>

<div className="row savedResult">
  <div className="col-md-12">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
        <p>{props.snippet}</p>
        <a href={props.url} target="_blank">View Article</a>
        <button type="button" className="btn btn-outline-danger float-right" {...props}>Delete</button>
      </div>
    </div>
  </div>
</div>
