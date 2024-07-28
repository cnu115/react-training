import axios from "axios";
import { deleteProductFailure, deleteProductRequest, deleteProductSuccess, fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess } from "../actions";

const host = `https://dummyjson.com`;

const authApi = `${host}/auth/me`

const getProductsApi = `${host}/products`;

const getProductApi = (id) => `${host}/products/${id}`;

export const userAuthInfo = async (token) => {
    return await axios(authApi, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
}

export const getProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsRequest());
        try {
            const { data } = await axios(getProductsApi, {
                method: 'GET',
            });
            dispatch(fetchProductsSuccess(data));
        } catch (error) {
            dispatch(fetchProductsFailure(error));
        }
    }

}

export const deleteProduct = (id) => {
    return async (dispatch) => {
        dispatch(deleteProductRequest());
        try {
            const { data } = await axios(getProductApi(id), {
                method: 'DELETE',
            });
            dispatch(deleteProductSuccess(id));
        } catch (error) {
            dispatch(deleteProductFailure(error));
        }
    }

}

export const getProduct = async (id) => {
    return await axios(getProductApi(id), {
        method: 'GET',
    });
}

