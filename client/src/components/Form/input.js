import React from "react";

export const Input = props =>
<div className="form-group">
  <label htmlFor={props.id}>{props.label}</label>
  <input type="text" className="form-control" {...props} />
</div>
