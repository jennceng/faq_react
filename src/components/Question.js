import React from 'react';

const Question = props => {
  return (
    <li>
      <div>
        <button className="fa fa-plus" onClick={event => alert("see")}></button>
        {props.question}
        <br />
        <p> {props.answer} </p>
      </div>
    </li>
  );
};

export default Question;
