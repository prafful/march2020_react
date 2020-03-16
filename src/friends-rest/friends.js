import React from 'react';
import axios from 'axios'
import Friend from './friend';

class Friends extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            friends: [],
            name:'',
            location:'',
            updatename:'',
            updatelocation:'',
            updatelikes:0,
            updatedislikes:0,
            updateid:0
        }
        this.getName = this.getName.bind(this)
        this.getLocation = this.getLocation.bind(this)
        this.addFriend = this.addFriend.bind(this)
        this.receiveIdAndDelete = this.receiveIdAndDelete.bind(this)
        this.receiveIdAndEdit = this.receiveIdAndEdit.bind(this)
        this.getNameUpdate = this.getNameUpdate.bind(this)
        this.getLocationUpdate = this.getLocationUpdate.bind(this)
        this.updateFriend = this.updateFriend.bind(this)
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

    receiveIdAndEdit = function(receivedID){
        console.log("Edit with ID: " + receivedID );
        //get the friend detail for receivedId
        axios.get('http://localhost:3000/allfriends/' + receivedID)
                .then(res =>{
                    console.log(res);
                    console.log(res.data);
                    this.setState({
                        updatename:res.data.name,
                        updatelocation:res.data.location,
                        updatelikes:res.data.likes,
                        updatedislikes:res.data.dislikes,
                        updateid:res.data.id
                    })
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
                            editWithId={this.receiveIdAndEdit}
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

    updateFriend = function(){
        console.log("Update Friend With ID: " + this.state.updateid);

        if (!(this.state.updatename == '') && !(this.state.updatelocation=='')) {
            var updatefriendJson = {
                "name":this.state.updatename,
                "location":this.state.updatelocation,
                "likes": this.state.updatelikes,
                "dislikes":this.state.updatedislikes
            }
            
            axios.put('http://localhost:3000/allfriends/' + this.state.updateid, updatefriendJson)
                    .then(res=>{
                        console.log("Friend Updated!");
                        this.setState({ 
                            updatename: '',
                            updatelocation:'',
                            updatelikes:0,
                            updatedislikes:0,
                            updateid:0
                        })
                        console.log(res);
                        console.log(res.data);
                        this.getFriends()
                    }, err=>{
                        console.log(err);
                    })
        }


    }

    getNameUpdate = function(e){
        this.setState({updatename: e.target.value})
    }

    getLocationUpdate = function(e){
        this.setState({updatelocation: e.target.value})
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
                <fieldset>
                   <legend>Add Friend</legend>
               
               
                    Name:       <input type="text" 
                                    value={this.state.name} 
                                    onChange={this.getName}/>
                    <br />
                    Location:   <input type="text" 
                                    value={this.state.location} 
                                    onChange={this.getLocation}/>
                    <br />
                    <button onClick={this.addFriend}>Add</button>
                    
                </fieldset>
                <br />
                <fieldset>
                <legend>Update Friend</legend>
                 Id:         <input type="text" 
                                 value={this.state.updateid}   
                                 readOnly/>
                <br />
                 Likes:         <input type="text" 
                                 value={this.state.updatelikes}   
                                 readOnly/>
                <br />
                 Dislikes:         <input type="text" 
                                 value={this.state.updatedislikes}
                                 readOnly/>
                <br />

                 Name:       <input type="text" 
                                 value={this.state.updatename} 
                                 onChange={this.getNameUpdate}/>
                 <br />
                 Location:   <input type="text" 
                                 value={this.state.updatelocation} 
                                 onChange={this.getLocationUpdate}/>
                 <br />
                 <button onClick={this.updateFriend}>Update</button>
                 
             </fieldset>
          
            </div>
        );
    }
}

export default Friends;