import React from 'react';


class Friend extends React.Component {
    
    render() { 
        return ( 
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.loc}</td>
                <td>{this.props.like}</td>
                <td>{this.props.dislike}</td>
                <td>
                    <button >Edit</button>
                </td>
                <td>
                    <button >Delete</button>
                </td>
                <td>
                    <button >+</button>
                </td>
                <td>
                    <button >-</button>
                </td>

            </tr>
         );
    }
}
 
export default Friend;