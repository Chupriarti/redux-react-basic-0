const SET_REPOS = "SET_REPOS";

const defaultState ={
    items: [],
    iFetching: true
}

export default function reposReducer(state = defaultState, action){
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items
            }
        default: 
            return state;
    }
}
