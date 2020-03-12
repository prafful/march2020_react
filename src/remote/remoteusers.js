import React from 'react';
import axios from 'axios'

class RemoteUsers extends React.Component {
    
    componentWillMount(){
        this.getRemoteDate()
    }

    getRemoteDate = function(){
        axios.get("https://jsonplaceholder.typicode.com/users").then(this.successFunction, this.failureFunction)
    }

    successFunction = function(response){
        console.log(response);
        console.log(response.data);
    }

    failureFunction = function(error){
        console.log(error);
    }

    render() { 
        return ( 
            <div>
                <h4>Get Remote Users</h4>
            </div>
         );
    }
}

export default RemoteUsers
