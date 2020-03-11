import React from 'react';



class CommentAction extends React.Component {

    

    constructor(props){
        super(props)
        //define and initalize state
        this.state = {
            slikes: parseInt(this.props.calikes),
            sdislikes: parseInt(this.props.cadislikes),
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)

    }

    increment = function(){
        console.log("In increment function!" );
        //this.state.score = this.state.score + 1
        //update the state -> score
        //console.log(typeof(parseInt(this.state.slikes)));
        this.setState({slikes: this.state.slikes + 1})
     }

     decrement = function(){
         console.log("in decrement function!");
         this.setState({sdislikes: this.state.sdislikes - 1 })
     }
    
    render() { 
        return (
            <div >
                Likes: {this.state.slikes}
                &nbsp;
                Dislikes: {this.state.sdislikes}
                &nbsp;
                <button onClick={this.increment}> + </button>
                &nbsp;
                <button onClick={this.decrement}> - </button>
               
            </div>
          );
    }
}
 
export default CommentAction