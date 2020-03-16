import React from 'react';


class Friend extends React.Component {

    constructor(props){
        super(props)

        this.deleteFriendWithId = this.deleteFriendWithId.bind(this)
        this.editFriendWithId = this.editFriendWithId.bind(this)
        this.changeLike = this.changeLike.bind(this)
        this.changeDislike = this.changeDislike.bind(this)
    }

    deleteFriendWithId = function(){
        console.log("Delete friend with ID: " + this.props.id);
        this.props.deleteWithId(this.props.id)
    }

    editFriendWithId = function(){
        console.log("Edit friend with ID: " + this.props.id);
        this.props.editWithId(this.props.id)
    }

    changeLike = function(){
        console.log("Change like for ID: " + this.props.id);
        this.props.changeLike(this.props.id)
    }

    changeDislike = function(){
        console.log("Change dislike for ID: " + this.props.id);
        this.props.changeDislike(this.props.id)
    }

    
    render() { 
        return ( 
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.loc}</td>
                <td>{this.props.like}</td>
                <td>{this.props.dislike}</td>
                <td>
                    <button onClick={this.editFriendWithId}>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteFriendWithId}>Delete</button>
                </td>
                <td>
                    <button onClick={this.changeLike}>+</button>
                </td>
                <td>
                    <button onClick={this.changeDislike}>-</button>
                </td>

            </tr>
         );
    }
}
 
export default Friend;