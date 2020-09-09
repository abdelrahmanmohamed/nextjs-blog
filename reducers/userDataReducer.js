import TYPES from "../types";

//Initial State
const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TYPES.FETCH_USER:
            return {
                ...state,
                items: action.payload
            };

        case TYPES.ADD_USER:
            return {
                ...state,
                item: action.payload,
                items: [action.payload, ...state.items]
            };

        default:
            return state;
    }
}