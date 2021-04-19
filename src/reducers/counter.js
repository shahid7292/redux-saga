let count = 0;
const counterReducer = (state = count, action) => {
    switch (action.type) {
        case "INCREAMENT":
            return state + action.payload;
        case "DECREAMENT":
            return state - action.payload;
            case "RESET":
                return count;
        default:
            return state;
    }
}
export default counterReducer;