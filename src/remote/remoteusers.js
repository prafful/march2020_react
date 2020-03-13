import React from 'react';
import axios from 'axios'
import User from './user';

class RemoteUsers extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            users:[]
        }
        this.successFunction = this.successFunction.bind(this)
    }
    
    componentWillMount(){
        this.getRemoteData()
    }

    getRemoteData = function(){
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(this.successFunction, this.failureFunction)
        
    }

    successFunction = function(response){
        console.log(response);
        console.log(response.data);
        this.setState({users: response.data})
        console.log("this.state.users");
        console.log(this.state.users);

    }

    failureFunction = function(error){
        console.log(error);
    }

    displayUsers(){
        //map -> Calls a defined callback function on each element of 
        //an array, and returns an array that contains 
        //the results.
        return this.state.users.map(function(eachuser){
            return (
              <User key={eachuser.id}
                    id={eachuser.id}
                    myname={eachuser.name} 
                    username={eachuser.username}
                    email={eachuser.email}
                    latitude={eachuser.address.geo.lat}
                    longitude={eachuser.address.geo.lng}
                    >
              </User>
                    
                );
        })
    }

    render() { 
        return ( 
            <div>
                <h4>Get Remote Users</h4>
                <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                     {this.displayUsers()}
                </tbody>
                    
                </table>
               
           
            </div>
         );
    }
}

export default RemoteUsers
