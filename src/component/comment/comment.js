import React from 'react';
import CommentTitle from './structure/title';
import CommentBody from './structure/body';

class CommentComponent extends React.Component{

    render(){
        console.log(this.props);
        return(
            <div>
                <h4>Comment Component</h4>
                <p>Title: <CommentTitle cTitle={this.props.children}></CommentTitle></p>
                <CommentBody 
                    commentbody={this.props.cBody}
                    cblikes={this.props.clikes}
                    cbdislikes={this.props.cdislikes}
                ></CommentBody>
                <hr></hr>
            </div>
        )
    }

}

export default CommentComponent