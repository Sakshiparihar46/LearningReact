import{useState} from "react";
export default function CommentsForm({addNewComment} ){
    let[formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5
    });

    let handleInputchange=(event)=>{
        setFormData((currData)=>{
            return {...currData,[event.target.name]:event.target.value}
        });
    };

    let handleSubmit=(event)=>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating:5}
        );
    }
    return <div>
        <h4>Give a Comments</h4>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input type="text" placeholder="username" value={formData.username} onChange={handleInputchange} id="username" name="username"/>
            <br /><br /><br />
            <label htmlFor="remarks">Remark: </label>
            <textarea name="remarks" placeholder="add few remarks" value={formData.remarks} onChange={handleInputchange} id="remark"></textarea><br /><br /><br />
            <label htmlFor="rating">Rating: </label>
            <input type="text" placeholder="rating" value={formData.rating} onChange={handleInputchange} id="rating" name="rating"/><br /><br /><br />
            <button type="submit">Add comment</button>
        </form>
    </div>
}