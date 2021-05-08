import React from 'react'
import "./post.css";
import Avatar from '@material-ui/core/Avatar';

function Post(props) {
    console.log("Props: ",props)
    return (
        <div>
            <div className = "Post__header">
                <Avatar 
                className = "Post__Avatar"
                alt={props.userName}
                src="/static/images/avatar/1.jpg" />
                <h3>{props.userName}</h3>
            </div>
            
            {/* header -> avatar and user name  */}
            {/* images */}
            <img className = "Post__image" src={props.imageUrl} alt ="post"/>
            {/* username and caption */}
            <h4 className ="Post__text"><b>{props.userName} </b>{props.caption} </h4>
        </div>
    )
}

export default Post
