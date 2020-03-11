import React from 'react';
import CommentDescription from './bodychild/description';
import CommentAction from './bodychild/action';

class CommentBody extends React.Component {
    state = {  }
    render() { 
        return ( 
            <span>
                <CommentDescription cDesc={this.props.commentbody}></CommentDescription>
                <CommentAction 
                        calikes={this.props.cblikes}
                        cadislikes={this.props.cbdislikes}
                        ></CommentAction>
            </span>
         );
    }
}
 
export default CommentBody;