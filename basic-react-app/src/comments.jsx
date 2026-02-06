import { useState } from "react";
import CommentsForm from './commentsForm.jsx'
import './comments.css'
export default function Comment(){
    let [comments,setComments]=useState([{
        username:"@sk",
        remarks:"great job",
        rating:4
    }]);

    let addNewComment=(comment)=>{
        setComments((currComments)=>[...currComments,comment]);
    }
    return <div>
        <h4>All comments</h4>
        {comments.map((comment,idx)=>(
            <div className="comment" key={idx}>
        <span>{comment.remarks}</span>
        <span>(rating={comment.rating})</span><br />
        <p>-{comment.username}</p>
        </div>
        ))}
        
        <hr />
        <CommentsForm addNewComment={addNewComment}/>
        
        
    </div>
}