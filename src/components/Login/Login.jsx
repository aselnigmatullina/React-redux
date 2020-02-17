import React from 'react'                    ;
import { Field, reduxForm } from 'redux-form';
import s from './../Login/Login.module.css'  ;
import { Input, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';

const LoginForm = (props) => {
 return(
     <>
     <form onSubmit={props.handleSubmit}>
             {createField("Email", "email", Input, [required])}
             {createField("Password", "password", Input, [required], {type:"password"})}
             {createField(null, "rememberMe", Input, [],  {type: "checkbox"}, "Запомнить меня")}     
         <div>
             <button >Login</button>
         </div>
     </form>
     </>
 )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
       console.log(formData)
    }
    return(
        <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
}

export default Login;