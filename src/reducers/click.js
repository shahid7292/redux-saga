let count = 0;
const clickReducer = (state = count, action) => {
    switch (action.type) {
        case "INCREAMENT_CLICK_ASYNC":
            return state + 1;
        case "ONLY_INCREAMENT":
            return state + 1
        default:
            return state;
    }
}

export default clickReducer;