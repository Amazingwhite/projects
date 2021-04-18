import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from '../../utils/validators';
import { Input } from '../common/Preloader/FormControls/FormControls';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router';
import classes from '../styles/Login.module.css';

let maxLength40 = maxLengthCreator(40);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLength40]} />
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength40]} />
                </div>
                {props.error && <div className={classes.commonError}>{props.error}</div>}
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
            </div>
                <div>
                    <button>Login</button>
                </div>
                
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
        console.log(formData)
    }

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);