import React, { useState, useEffect, useReducer } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from './Login.module.css';

const emailReducer = (state, action) => {
  if (action.type === "User_Email") {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if(action.type === 'Input_Blur'){
    return{ value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false }
}
const passwordReducer = (state, action) =>{
  if(action.type === 'User_Pass'){
    return{value: action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type === 'Input_Blur'){
    return{value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value :'', isValid:false}
}
const Login = props => {
  // const [emailInput, setEmailInput] = useState('');
  // const [isEmailValid, setEmailValid] = useState();
  // const [paswordInput, setPaswordInput] = useState('');
  // const [isPassValid, setPssValid] = useState();
  const [isFormValid, setIsFormValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null })
  const [passState, dispatchPassword] = useReducer(passwordReducer, {value:'', isValid: null})

  // destructuring
  const { isValid: emailisValid }= emailState;
  const { isValid: passwodisValid} = passState;

  useEffect(()=>{
   const identifier = setTimeout(()=>{
      console.log("testtime");
     setIsFormValid(
      emailisValid && passwodisValid);
    }, 500);
   return ()=>{ console.log("testclear");  clearTimeout(identifier);}
  },[emailisValid, passwodisValid])

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.userLogin(emailState.value, passState.value);
  }
  const onEmailInpchange = event => {
    dispatchEmail({type:'User_Email', val:event.target.value});

    // setIsFormValid(
    //   emailState.isValid && passState.isValid
    // );

  }
  const onPaassInpchange = event => {
    dispatchPassword({type:'User_Pass', val: event.target.value});

    // setIsFormValid(
    //   emailState.isValid && passState.isValid
    // );
  }

  const validateEmailhandler = () => {
    dispatchEmail({type:'Input_Blur'});
  }
  const validatePasswrdhandler = () => {
    dispatchPassword({type:'Input_Blur'});
  }
  return (
    <Card className={styles.login}>
      <form onSubmit={onSubmitHandler}>
        <div className={`${styles.control} ${emailState.isValid === false ? styles.invalid : ''}`}>
          <label htmlFor="username">Username</label>
          <input type="email" id="username" value={emailState.value} onChange={onEmailInpchange} onBlur={validateEmailhandler} />
        </div>
        <div className={`${styles.control} ${passState.isValid === false ? styles.invalid : ''}`}>
          <label htmlFor='Password'>Password</label>
          <input type="password" name="pass" value={passState.value} id="password" onChange={onPaassInpchange} onBlur={validatePasswrdhandler} />
        </div>
        <div className={styles.action}>
          <Button type="submit" disabled={!isFormValid}>Submit</Button>
        </div>
      </form>
    </Card>
  )
}

export default Login;