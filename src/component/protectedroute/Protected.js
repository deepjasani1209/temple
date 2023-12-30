import React from 'react'
import { Navigate, Navigation, Outlet } from 'react-router-dom'
import NavbarSign from '../checkoutform/NavbarSign';
// import { Navigation } from '@mui/icons-material';

function Protected({login}) {

    // let login=false;

    if(login=true){
return <Outlet />
    }else{
        return <Navigate to={"/login"} />
    }
//   return (
//     <>
    
      
      
//     </>
//   )
}

export default Protected
