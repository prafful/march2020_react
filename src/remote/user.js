import React from 'react';

class User extends React.Component {
    
    render() { 
        return ( 
            <tr>
                <td>{this.props.id}</td>

                <td>{this.props.myname}</td>  
             
                <td> {this.props.username}</td>  
            
                <td>{this.props.email}</td>  
             
                <td>  {this.props.latitude}</td> 
                           
                <td>{this.props.longitude}</td>   
               
          
            </tr>
         );
    }
}
 
export default User;