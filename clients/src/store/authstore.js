import { create } from 'zustand';
import axios from 'axios';

const authStore = create((set) => ({
    loggedIn:null,
    loginForm:{
        email:"",
        password:""
    },
   signupForm:{
        email:"",
        password:""
    },
    updateLoginForm:(e)=>{
        const {name , value}= e.target;
        
        set(state=>{
            return {
            loginForm:{
                ...state.loginForm,
            [name]:value}
    }})
    },
    updateSignUpForm:(e)=>{
        const {name , value}= e.target;
        
        set(state=>{
            return {
            signupForm:{
                ...state.signupForm,
            [name]:value}
    }})
    },
    login:async ()=>{
        
        const {loginForm}=authStore.getState()
        const res= await axios.post('http://localhost:3000/login',loginForm,{withCredentials:true});
        set({
            loggedIn:true,
            loginForm:{
                email:"",
                password:"",
            }
        })
       
    },
    checkAuth:async()=>{
        try{
            await axios.get('/checkauth',{withCredentials:true});
            set({
                loggedIn:true,
            })
        } catch(err){
            set({
                loggedIn:false,
            })
           
        }
       
    },
    signup:async ()=>{
        
        const {signupForm}=authStore.getState()
        const res= await axios.post('/signup',signupForm,{withCredentials:true});
        set({
           signupForm:{
            email:"",
            password:""
           }
        })

    },
    logout:async ()=>{
       await axios.get("/logout",{withCredentials:true})
       set({loggedIn:false})
    }
   

} ))
export default authStore;