import { GET_CARDS_FAILURE, GET_CARDS_REQUEST, GET_CARDS_SUCCESS } from "../actionType"


const initialState = {
    isLoading: false,
    isError: false,
    cards: []
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CARDS_REQUEST:
            return { ...state, isLoading: true }
        case GET_CARDS_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case GET_CARDS_SUCCESS:
            return { ...state, isLoading: false, cards: payload }
        default:
            return state;
    }
}