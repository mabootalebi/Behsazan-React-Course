import React from 'react';
import Avatar from './Avatar';
import Description from './Description';
import {Scoring} from './Scoring';

export class Comment extends React.Component {
    constructor (props){
        super(props);
    }

    render(){
        const {imageURL, username, point, text, date} = this.props;

        const commentStyle = {
            border: 'solid thin #ddd',
            margin: '25px 10%',
            boxShadow: '0px 0px 20px #777',
            borderRadius: '10px'
        };
        
        return <div style={commentStyle}>
                    <Avatar imageURL={imageURL} username={username} width="50%" textAlign="left"></Avatar>
                    <Scoring point={point} width="50%" textAlign="right"></Scoring>
                    <br/>
                    <Description description={text} textAlign="left"></Description>
                    <Description description={date} textAlign="right"></Description>
                </div>
    }
}
