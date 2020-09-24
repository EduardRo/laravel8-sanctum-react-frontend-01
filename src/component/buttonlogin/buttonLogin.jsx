import React from 'react';

const ButtonLogin = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.name}</button>
    </div>
  );
};

export default ButtonLogin;
