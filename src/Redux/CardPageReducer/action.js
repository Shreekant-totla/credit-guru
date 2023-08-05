import axios from "axios";
import { GET_CARDS_FAILURE, GET_CARDS_REQUEST, GET_CARDS_SUCCESS } from "../actionType"



export const getCreditCards = (paramObj) =>(dispatch) => {
    dispatch({ type: GET_CARDS_REQUEST });
    axios.get("https://creditguru.onrender.com/cards", paramObj).then((res) => {
        dispatch({ type: GET_CARDS_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ typppe: GET_CARDS_FAILURE })
    })
}