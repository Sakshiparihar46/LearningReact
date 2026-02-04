import {useState} from "react";
export default function LikeButton(){
    let [isLiked,setisLiked]=useState(false);
    let[clicks,setclicks]=useState(0);
    let toggleLike=()=>{
        setisLiked(!isLiked);
        setclicks(clicks+1);
    }
    let styles={
        color:"red"
    }
    return (
        <div style={styles}>
        <p onClick={toggleLike}>
            {
                isLiked?<i  className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>
            }
            <p>{clicks}</p>
        </p> 
        </div>
    )
}