import React from 'react';



class CommentAction extends React.Component {
    
    render() { 
        return (
            <div>
                Likes: {this.props.calikes}
                &nbsp;
                Dislikes: {this.props.cadislikes}
                &nbsp;
                <button> + </button>
                &nbsp;
                <button > - </button>
            </div>
          );
    }
}
 
export default CommentAction