import React from 'react';

class User extends React.Component {
    
    render() { 
        return ( 
            <span>
                User: {this.props.name}
                <br />
                Username: {this.props.username}
                <br />
                Email: {this.props.email}
                <br />
                Latitude: {this.props.latitude}
                <br />                
                Longitude: {this.props.longitude}
                <br />
                <br />
            </span>
         );
    }
}
 
export default User;