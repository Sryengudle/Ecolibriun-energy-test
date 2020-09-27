import React from "react";

const TextArea = props => (
  <div className="form-group" style={{borderStyle: "ridge", marginLeft:'20px', marginTop: '22px'}}>
    <span>{props.value}</span>
  </div>
);

export default TextArea;
