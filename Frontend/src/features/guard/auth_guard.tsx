import React, { Children, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
};

const AuthGuard = ({ children }: Props) => {

    const [cookies] = useCookies(['auth_token']);
    
    const navigate = useNavigate();
    const token = cookies.auth_token;


    useEffect(() => {
        if (!token) {
            console.log('unauthorized----->');
            navigate('/');
        }
    }, [navigate, token]);

    if (!token) {
        return null; // Or a loading spinner while redirecting
    }
    else {
        return <>
            {children}
        </>
    }
}

export default AuthGuard;