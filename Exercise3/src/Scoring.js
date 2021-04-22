import React from 'react';

export class Scoring extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            newPoint: this.props.point
        };

        this.increaseScore = this.increaseScore.bind(this);
        this.decreaseScore = this.decreaseScore.bind(this);
    }

    increaseScore(){
        const {point} = this.props;
        this.setState((prevState) =>{
            if (prevState.newPoint < point + 1){
                return {
                    newPoint: prevState.newPoint + 1
                }
            }
            else{
                alert('You already like it')
            }
        });
    }

    decreaseScore(){
        const {point} = this.props;
        this.setState((prevState) =>{
            if (prevState.newPoint > point - 1){
                return {
                    newPoint: prevState.newPoint - 1
                }
            }
            else{
                alert('You already dislike it')
            }
        });
    }

    render(){
        const {width, textAlign} = this.props;
        const {newPoint} = this.state;

        const scoringBlockStyle = {
            display:'inline-block',
            fontWeight: 'bold',
            width: width,
            textAlign: textAlign,
            padding: '30px',
            boxSizing: 'border-box'
        }
        
        return <div style={scoringBlockStyle}>
                    <span>Total Points : {newPoint}</span>
                    <a onClick={this.increaseScore} style={{paddingLeft:'20px'}}><i className="fa fa-thumbs-up"></i></a>
                    <a onClick={this.decreaseScore} style={{paddingLeft:'10px'}}><i className="fa fa-thumbs-down"></i></a>
               </div>
    }
}