import React from "react";

const Select = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}> {props.title} </label>
      <select
        id={props.name}
        name={props.name}
        value={props.selectedOptions}
        onChange={props.handleChange}
        className="form-control"
      >
        {props.placeholder}
        {props.options && Array.isArray(props.options) && props.options.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );

};

export default Select;
