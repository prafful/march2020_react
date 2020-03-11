import React from 'react';

class CommentTitle extends React.Component {
    
    render() { 
        return ( 
            <span>
             {this.props.cTitle}
            </span>
         );
    }
}
 
export default CommentTitle;