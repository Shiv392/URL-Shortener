import React from 'react';
import { useLoader } from '../../context/loadercontext';

const Loader = ()=>{
 const {loading,show_loader,off_loader} = useLoader();

 if(!loading.isloading) return null;

 return(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
    </div>
 )
}

export default Loader;