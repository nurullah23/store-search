import {
    SEARCH_STORE_START,
    SEARCH_STORE_SUCCESS,
    SEARCH_STORE_FAILED
} from "../data/constants";

const initialState = {
    results: [],
    loading: false,
    error: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_STORE_START:
            return {
                ...state,
                loading: true
            };

        case SEARCH_STORE_SUCCESS:
            return {
                ...state,
                items: payload,
                loading: false
            };

        case SEARCH_STORE_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            };

        default:
            return state;
    }
}