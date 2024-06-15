import axios from "axios";

const host = `https://dummyjson.com`;

const authApi = `${host}/auth/me`

const getProductsApi = `${host}/products`;

export const userAuthInfo = async (token) => {
    return await axios(authApi, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
}

export const getProducts = async () => {
    return await axios(getProductsApi, {
        method: 'GET',
    });
}

