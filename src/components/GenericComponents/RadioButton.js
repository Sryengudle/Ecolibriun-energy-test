import React from "react";

const RadioButton = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <div className="radio">
        {props.options && Array.isArray(props.options) && props.options.map((option, index) => {
          console.log('asdfasdfasfasdfadsf', index)
          return (
            <label key={index} className="checkbox-inline">
              <input
                id={props.name}
                name={props.name}
                onChange={props.handleChange}
                value={option.value}
                checked={option.value === props.selectedOptions}
                type="radio"
              />
              <input type="text" value={option.value} onChange={(e) => props.handleChangeInput(e, index, props.idx)} />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioButton;
