import { DECREMENT, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, INCREMENT } from "./types"

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCT_REQUEST
});

export const fetchProductsSuccess = (data) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: data
});

export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: error
});