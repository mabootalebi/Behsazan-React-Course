import React from 'react';

function Avatar(props){
    const imageStyle = {
        borderRadius: '50%',
        padding: '2px',
        verticalAlign: 'middle',
        width: '90px'
    };

    const usernameStyle = {
        fontWeight: 'bold',
        padding: '10px'
    };

    const divStyle ={
        display:'inline-block',
        width: props.width,
        textAlign: props.textAlign
    }
    return <div style={divStyle}>
                <img src={props.imageURL} alt={props.username} title={props.username} style={imageStyle}></img>
                <span style={usernameStyle}>{props.username}</span>
           </div>
}

export default Avatar;