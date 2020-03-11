import React from 'react';
import ReactDOM from "react-dom";
import MyFirstComponent from './firstcomponent';
import Rainbow from './rainbow/rainbow';



var location = document.getElementById('rootcomponent')

ReactDOM.render(
                <span>    
                    <MyFirstComponent></MyFirstComponent>  
                </span>, location)


ReactDOM.render(
                <div>
                    <Rainbow color="violet">R</Rainbow>
                    <Rainbow color="indigo">A</Rainbow>
                    <Rainbow color="blue">I</Rainbow>
                    <Rainbow color="green">N</Rainbow>
                    <Rainbow color="yellow">B</Rainbow>
                    <Rainbow color="orange">O</Rainbow>
                    <Rainbow color="violredet">W</Rainbow>
                </div>            
                , document.getElementById('rainbow'))                