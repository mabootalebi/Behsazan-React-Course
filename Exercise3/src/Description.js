import React from 'react';

export default function Description(props){
    const style = {
        textAlign: props.textAlign,
        padding: '10px 20px'
    }

    return <div style={style}>
                <span>{props.description}</span>
           </div>
}
