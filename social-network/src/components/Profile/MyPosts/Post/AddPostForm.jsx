import React from "react"
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../../utils/validators";
import { Textarea } from "../../../common/Preloader/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    let onKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            props.handleSubmit()
        }
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Enter your message"} name={"newPostText"} 
                   component={Textarea} onKeyPress={onKeyPress} validate={[required, maxLength10]}></Field>  
            <button >Add post</button>  
        </form>
    )
    
}


const AddPostReduxForm = reduxForm({ form: "profileAddPost" })(AddPostForm)

export default AddPostReduxForm;