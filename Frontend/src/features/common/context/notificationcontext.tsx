import { createContext, useContext, useState, type ReactNode } from "react";

type notification_type={
    isopen : boolean
    message : string
    type : string
}

interface notification_context_type{
    notification : notification_type
    show_success : (message : string)=>void
    show_error : (message : string)=> void
    hide_notification : () => void
}

export const NotificationContext = createContext<notification_context_type | undefined>(undefined);

// Hook to use context
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  return context;
};


export const NotificationProvider : React.FC<{children : ReactNode}> = ({children})=>{
  const [notification,setNotification] = useState<notification_type>({isopen:false,message:'',type:''});

  const show_success=(message:string)=>{
    setNotification({isopen:true,message:message,type:'success'});
  }
  const show_error = (message:string)=>{
    setNotification({isopen:true,message:message,type:'error'});
  }
  const hide_notification = ()=>{
    setNotification((prev)=> ({...prev,isopen:false}));
  }

  return(
    <NotificationContext.Provider value={{notification,show_error,show_success,hide_notification}}>
        {children}
    </NotificationContext.Provider>
  )
}