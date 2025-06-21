import React, { useContext, useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";
import { useNotification } from "../../context/notificationcontext";

const Notification : React.FC = ()=>{
 const {notification,hide_notification} = useNotification();
 const {isopen,message,type} = notification;
 const [open,setOpen] = useState(isopen);

 useEffect(()=>{
   setOpen(isopen);
 },[isopen])

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
    hide_notification();
  };

 return(
    <Snackbar
     open={open}
     autoHideDuration={3000}
     onClose={handleClose}
     anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
     <Alert onClose={handleClose} severity={type === "success" ? "success" : "error"} variant="filled" sx={{ width: '100%' }}>
        {message}
    </Alert> 
    </Snackbar>
 )
    

}
export default Notification;