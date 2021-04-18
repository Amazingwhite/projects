import React from "react"
import {Field, reduxForm} from "redux-form"
import {required, maxLengthCreator } from "../../utils/validators";
import { Textarea } from "../common/Preloader/FormControls/FormControls";

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {

    let onKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            props.handleSubmit()
        }
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Enter your message"} name={"newMessageText"} 
                   component={Textarea} onKeyPress={onKeyPress} validate={[required, maxLength30]}/>
            <button >Add post</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default AddMessageReduxForm;


