import{useState} from "react";
import {useFormik} from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'username is required it can not be empty';
   }
   if (!values.ratings) {
     errors.ratings = 'ratings is required it can not be empty';
   }
   if (!values.remarks) {
     errors.remarks = 'this field is required it can not be empty';
   }
 
   return errors;
 };

export default function CommentsForm(){
    // let[formData,setFormData]=useState({
    //     username:"",
    //     remarks:"",
    //     ratings:5,
    // });

    const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       ratings: 5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // let handleInputchange=(event)=>{
    //     setFormData((currData)=>{
    //         return {...currData,[event.target.name]:event.target.value}
    //     });
    // };

    // let handleSubmit=(event)=>{
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username:"",
    //         remarks:"",
    //         ratings:5}
    //     );
    // }
    let styles={color:"red"};
    return <div>
        <h4>Give a Comments</h4>

        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input type="text" placeholder="username" value={formik.values.username} onChange={formik.handleChange} id="username" name="username"/>
            {formik.errors.username ? <div style={styles}>{formik.errors.username}</div> : null}
            <br /><br />
            <label htmlFor="remarks">Remark: </label>
            <textarea name="remarks" placeholder="add few remarks" value={formik.values.remarks} onChange={formik.handleChange} id="remark"></textarea>
              {formik.errors.remarks ? <div style={styles}>{formik.errors.remarks}</div> : null}
            <br /><br />
            <label htmlFor="ratings">Rating: </label>
            <input type="text" placeholder="rating" value={formik.values.ratings} onChange={formik.handleChange} id="ratings" name="ratings"/>
              {formik.errors.ratings ? <div style={styles}>{formik.errors.ratings}</div> : null}
            <br /><br />
            <button type="submit">Add comment</button>
        </form>
    </div>
}