import axios from "axios";

export const userAuthInfo = async (token) => {
   return await axios('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
}


