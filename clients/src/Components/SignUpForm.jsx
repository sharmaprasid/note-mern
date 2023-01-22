import React from 'react'
import authStore from '../store/authstore'
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const store=authStore();
   const navigate=useNavigate();
    const handleSignUpForm= async (e)=>{
        e.preventDefault();
       await store.signup();
        navigate("/login");
    }
  return (
    
    <div><form onSubmit={handleSignUpForm}>
        <input type="email" name="email" value={store.signUpForm.email} onChange={store.updateSignUpForm}/>
        <input type="password" name="password" value={store.signUpForm.password} onChange={store.updateSignUpForm}/>
        <button type="submit">Signup</button>
        </form>
    </div>
  )
}

export default SignUpForm