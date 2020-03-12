import React from 'react';
import ReactDOM  from 'react-dom'


class MyLifeCycle extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            check: 22
        }

        this.changeState = this.changeState.bind(this)
    }
    
    //componentWillMount
    //componentDidMount
    //componentWillUpdate
    //componentDidUpdate
    //componentWillUnmount

    componentWillUnmount(){
        console.log("Component at 'lifecycle' node is unmounted!");
        alert()
    }

    componentWillMount(){
        console.log("I will be mounted!");
        //alert()
    }

    componentDidMount(){
       
        console.log("I am mounted!");    
    }

    componentWillUpdate(){
        console.log("I will update!");
    }

    componentDidUpdate(){
        console.log("I did update!");
    }

    changeState = function(){
        this.setState({check: this.state.check + 1})
    }

    removeMe = function(){
        ReactDOM.unmountComponentAtNode(document.getElementById('lifecycle'))
    }

    render() { 
        return (
            <div>
                <h1>Component Lifecycle - {this.state.check}</h1>    
                <button onClick={this.removeMe}>Remove </button>
                &nbsp;
                <button onClick={this.changeState}>Change State</button>
            </div> 
            
         );
    }
}
 
export default MyLifeCycle;