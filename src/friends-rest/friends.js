import React from 'react';
import axios from 'axios'
import Friend from './friend';

class Friends extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            friends: [],
            name:'',
            location:''
        }
        this.getName = this.getName.bind(this)
        this.getLocation = this.getLocation.bind(this)
        this.addFriend = this.addFriend.bind(this)
        this.receiveIdAndDelete = this.receiveIdAndDelete.bind(this)
    }



    componentWillMount() {
        this.getFriends()
    }

    getFriends() {
        axios.get('http://localhost:3000/allfriends')
            .then((response) => {
                console.log(response);
                console.log(response.data);
                this.setState({ friends: response.data })
            }, (error) => {
                console.log(error);
            })
    }

    receiveIdAndDelete = function(receivedID){
        console.log("I am called from Friend (child) component!");
        console.log("I am in Friends component!");
        console.log("Deleting with ID: " + receivedID);

        axios.delete('http://localhost:3000/allfriends/' + receivedID)
                .then(res=>{
                    console.log("Deleted with Id: " + receivedID);
                    //udpate this.state.friends with new response after delete!
                    this.getFriends()
                }, err =>{
                    console.log(err);
                })
    }

    displayFriends = function () {
        return this.state.friends.map((friend) => {
                    return (
                        <Friend key={friend.id}
                            id={friend.id}
                            name={friend.name}
                            loc={friend.location}
                            like={friend.likes}
                            dislike={friend.dislikes}
                            deleteWithId={this.receiveIdAndDelete}
                        ></Friend>
                    )
        })


    }

    addFriend = function(){
        if (!(this.state.name == '') && !(this.state.location=='')) {
            var friendJson = {
                "name":this.state.name,
                "location":this.state.location,
                "likes": 0,
                "dislikes":0
            }
            this.setState({name: ''})
            this.setState({location:''})
            axios.post('http://localhost:3000/allfriends', friendJson)
                    .then(res=>{
                        console.log("Friend Added!");
                        console.log(res);
                        this.getFriends()
                    }, err=>{
    
                    })
        }

        
    }

    getName = function(e){
        //e.preventDefault()
        this.setState({name: e.target.value})
        console.log(this.state.name);
    }

    getLocation = function(e){
        //e.preventDefault()
        this.setState({location: e.target.value})
        console.log(this.state.location);
    }


    render() {
        return (
            <div>


                <table border='1'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Like</th>
                            <th>Dislike</th>
                            <th colSpan='4'>
                                Actions
                             </th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.displayFriends()}
                    </tbody>

                </table>
                <br />
               
                    Name:       <input type="text" 
                                    value={this.state.name} 
                                    onChange={this.getName}/>
                    <br />
                    Location:   <input type="text" 
                                    value={this.state.location} 
                                    onChange={this.getLocation}/>
                    <br />
                    <button onClick={this.addFriend}>Add</button>
                    

          
            </div>
        );
    }
}

export default Friends;