import { useState } from "react";
export default function Form(){
    let [formData,setFormData]=useState({
        fullname:"",
        username:"",
        password:""
    });
    
    let handleInputChange=(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;
        setFormData((currData)=>{
            currData[fieldName]=newValue;
            return{...currData,[fieldName]:newValue};
        }

        )
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullname:"",
            username:"",
            password:""
        });
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname"><b>FullName:  </b>
            </label>
            <input type="text" placeholder="enter your fullname" value={formData.fullname} onChange={handleInputChange} id="fullname"
            name="fullname"/><br /><br />


            <label htmlFor="username"><b>Username:  </b>
            </label>
            <input type="text" placeholder="enter your username" value={formData.username} onChange={handleInputChange} id="username"
            name="username"/><br/><br />


            <label htmlFor="password"><b>Password:  </b>
            </label>
            <input type="password" placeholder="enter your password" value={formData.password} onChange={handleInputChange} id="password"
            name="password"/><br/><br />


            <button>submit</button>
        </form>
    );
}