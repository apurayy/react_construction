import React, { useContext } from 'react'
import { AuthContext } from '../backend/context/Auth';
import { Navigate } from 'react-router-dom';

const RequierAuth = ({children}) => {
    const {user} = useContext(AuthContext);

    if(!user){
        return <Navigate to='/admin/login'/>
    }

  return children;
}

export default RequierAuth