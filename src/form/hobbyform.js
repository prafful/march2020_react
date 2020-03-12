import React from 'react';


class HobbyComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            htext: ''
        }
        this.getHobbyText = this.getHobbyText.bind(this)
    }

    getHobbyText = function(eventObject){
        console.log(eventObject);
        console.log(eventObject.target);
        console.log(eventObject.target.value);
        this.setState({htext: eventObject.target.value})
    }
    
    render() { 
        return ( 
            <div>
                Hobby Form!
                <form>
                    <fieldset>
                        <legend>Hobby</legend>
                        <label>Hobby: </label>
                        <input type="text" onChange={this.getHobbyText}></input>
                        {this.state.htext}
                    </fieldset>       
                </form>
                <hr></hr>
            </div> 
        );
    }
}
 
export default HobbyComponent;