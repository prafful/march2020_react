import React from 'react';



class Rainbow extends React.Component {
    
    render() { 
        let rainbowStyle ={
            color:this.props.color
        
        }

        return ( 
            <div>

                <h1 style={rainbowStyle}>{this.props.children}</h1>
           
            </div>
         );
    }
}
 
export default Rainbow;