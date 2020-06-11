import React from "react";
import "./Content.css";
const Content = (props) =>{
    return (
     <div className = "content">
            <div className = "image-holder">
                <img src = {props.image} alt = "news-img"/>
            </div>
           
           <div className="desc">
                <div className = "headline">{props.title}</div>
                <div className = "author">{props.author}</div>
                <div>{props.description}</div>
            </div>
            

    </div>)
}
export default Content;