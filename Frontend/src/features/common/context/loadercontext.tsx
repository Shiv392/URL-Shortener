import { createContext, useContext, useState, type ReactNode } from "react";

type loader_type={
    isloading : boolean
}

interface loadercontext_type{
loading : loader_type
show_loader:()=> void
off_loader : ()=> void
} 

export const LoaderContext = createContext<loadercontext_type | undefined>(undefined);

export const LoaderProvider : React.FC<{children:ReactNode}> = ({children})=>{
    const [loading,setLoading] = useState<loader_type>({isloading:false});

    const show_loader=()=>{
        setLoading({isloading:true});
    }

    const off_loader=()=>{
        setLoading({isloading:false});
    }

    return (
        <LoaderContext.Provider value={{loading,show_loader,off_loader}}>
            {children}
        </LoaderContext.Provider>
    )
}

export const useLoader=()=>{
    const context = useContext(LoaderContext);
    if(!context){
    throw new Error("useLoader must be used within Loader Provider");
    }
    else return context;
}