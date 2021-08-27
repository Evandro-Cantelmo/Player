import React from 'react';

// import { Container } from './styles';

function MiniBoxOptions(props) {
  return (
      <div className="mini-box-options" style={props.style} onClick={props.onClick}>
          {props.children}
          
      </div>
  )
}

export default MiniBoxOptions;