import React from 'react';

// import { Container } from './styles';

function MiniBoxMusic(props) {
    return (
        <div className="mini-box-music" style={props.style}>
            <p>{props.description}</p>
            {props.children}
        </div>
    )
}

export default MiniBoxMusic