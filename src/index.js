import React from 'react';
import ReactDOM from "react-dom";
import MyFirstComponent from './firstcomponent';



var location = document.getElementById('rootcomponent')

ReactDOM.render(
                <span>    
                    <MyFirstComponent></MyFirstComponent>  
                </span>, location)