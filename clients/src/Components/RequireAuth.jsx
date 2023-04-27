import React from 'react'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import authStore from '../store/authstore'

const RequireAuth = (props) => {
    const store=authStore();
    useEffect(()=>{

        if(store.loggedIn===null){
            store.checkAuth();
        }
    },[])
    if(store.loggedIn===null){
        return <div>loading</div>

    }
    if(store.loggedIn===false){
        return <div><Navigate to="/login"/></div>

    }
  return (
    <div>{props.children}</div>
  )
}

export default RequireAuth