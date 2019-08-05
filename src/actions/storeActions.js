import _ from 'lodash'
import {
    SEARCH_STORE_SUCCESS,
    SEARCH_STORE_START,
    SEARCH_STORE_FAILED,
    SEARCH_STORE_API_BASE_URL
} from '../data/constants';


export const searchStore = (query) => async (dispatch) => {
    dispatch({
        type: SEARCH_STORE_START
    });

    await fetch(SEARCH_STORE_API_BASE_URL + query)
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: SEARCH_STORE_SUCCESS,
                payload: response.results || []
            });
        }).catch((error) => {
            dispatch({
                type: SEARCH_STORE_FAILED,
                payload: _.get(error, 'message')
            });
        });
};
