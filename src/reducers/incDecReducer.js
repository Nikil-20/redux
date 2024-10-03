//it take 2parameter 1)initialstate 2)action

const initialstate = 0;

const incDecReducer = (state = initialstate, action) => {
    if (action.type === "increment") {
        return state + action.payload;
    } else if (action.type === "decrement") {
        return state - 1;
    }else if (action.type === "reset"){
        return state = 0;
    }
    else {
        return state;
    }
}
export default incDecReducer