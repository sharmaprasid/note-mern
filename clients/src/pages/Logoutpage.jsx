import React from 'react'
import { useEffect } from 'react'
import authStore from '../store/authstore'

const Logoutpage = () => {
    const Store=authStore();
    useEffect(()=>{
       
        Store.logout();
    },[])
  return (
    <div>Logoutpage</div>
  )
}

export default Logoutpage