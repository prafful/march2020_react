import React from 'react';
import CommentComponent from './component/comment/comment';


class MyFirstComponent extends React.Component{

    score = 80

    message = "I am having some fun learning React!"

    displayMessage = function(){
        return this.message
    }

    render(){

        let mystyle = {
            color: 'goldenrod',
            backgroundColor:'bisque',
            borderBottom:'1px solid brown'

        }

        return(
                <div>
                    <h1 style={mystyle}>
                        Comments: {this.score}
                    </h1>
                    <CommentComponent 
                            cBody="Lorem Ipsum Dorom Lodith"
                            clikes='53'
                            cdislikes='2'
                            >
                            This is cool comment!
                    </CommentComponent>
                    
                    <CommentComponent 
                            cBody="Lodith Dorum Ipsum More"
                            clikes='40'
                            cdislikes='22'
                            >
                            I like to argue and comment!
                    </CommentComponent>
                 
                    <CommentComponent
                            cBody="Pika Mika Lika Shika"
                            clikes='40'
                            cdislikes='15'
                            >
                            I like to debate and comment!
                    </CommentComponent>
               
                    <CommentComponent
                            cBody="Yeh Kya Ho Gaya!"
                            clikes='4'
                            cdislikes='20'
                            >
                            I like to critise and keep quiet!
                    </CommentComponent>
                   
                    
                </div>    
            )
    }

}

export default MyFirstComponent


