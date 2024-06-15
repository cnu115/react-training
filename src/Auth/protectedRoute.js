// src/ProtectedRoute.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './authContext';
import { userAuthInfo } from '../Api/services';


const ProtectedRoute = ({ children }) => {
    //   console.log('ProtectedRoute', user)
    const { user, login } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        // debugger;
        const authUser = async () => {
            try {
                const token = sessionStorage.getItem('token');
                if (user === null && token !== null) {
                    /* providing token in bearer */
                    const res = await userAuthInfo(token);
                    const { data, status } = res;
                    if (status === 200) {
                        login(data);
                    } else {
                        navigate('/login')
                    }
                } else if (token === null) {
                    navigate('/login')
                }
            } catch (error) {
                // debugger;
                if(error?.response?.status === 401){
                    navigate('/login')
                }
                console.error('error', error)
            }
        }

        authUser();

    }, [user, navigate, login]);

    return children;
};

export default ProtectedRoute;
