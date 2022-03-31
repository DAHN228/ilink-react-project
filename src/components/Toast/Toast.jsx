import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import Failure from '../UI/popup/Failure';
import Success from '../UI/popup/Success';

const Msg = ({kind}) => (
  <div>
    { kind === 'success' 
    ? <Success/>
    : <Failure/>
    }
  </div>
)

const Toast = ({kind}) => {
    toast(<Msg kind={kind}/>) 
  return (
    <div>
        <ToastContainer closeButton={false} closeOnClick={true} autoClose={5000}/>
    </div>
  )
}

export default Toast