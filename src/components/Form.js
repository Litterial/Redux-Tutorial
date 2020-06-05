import React, { Component,useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../js/actions/index";

//Connects Redux actions to props
function mapDispatchToProps(dispatch){
    return{
        addArticle: (article) => dispatch(addArticle(article))
    };
}



function ConnectedForm (props){
    
    const [title,setTitle] = useState();
    const [id,setId]= useState(1);
    const handleChange = e =>setTitle(e.target.value)
    const handleSubmit = e =>{
        e.preventDefault();
        props.addArticle({title,id});
        setTitle("");
        setId(prevID => prevID +1);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
            </div>
            <div>
                <input type = "text" id="title" value={title || ''} onChange={handleChange} />
            </div>
            <button type ="submit">Submit</button>
        </form>
    )
}

const Form = connect (null,mapDispatchToProps)(ConnectedForm);

export default Form;