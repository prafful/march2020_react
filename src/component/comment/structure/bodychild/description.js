import React from 'react';

class CommentDescription extends React.Component {
    
    render() { 
        return (
            <p>{this.props.cDesc}</p>
          );
    }
}
 
export default CommentDescription;