import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "../actions/types"

const initialState = {
    data: [],
    error: null,
    loading: false
}

const productReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: actions.payload
            }
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: actions.payload
            }
        case DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case DELETE_PRODUCT_SUCCESS:
            const oldState = {...state}
            oldState.data.products = oldState.data.products.filter(product => product.id !== actions.payload)
            // debugger;
            return {
                ...state,
                loading: false,
                data: oldState.data
            }
        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: actions.payload
            }
        default:
            return state;
    }

}

export default productReducer;