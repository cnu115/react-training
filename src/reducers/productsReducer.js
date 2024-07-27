import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "../actions/types"

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
        default:
            return state;
    }

}

export default productReducer;