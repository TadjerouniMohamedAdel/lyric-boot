export const historyReducer = (history,action) =>{
    switch (action.type) {
        case "HISTORY_PUSH":
            return [...history,action.value]
            break;
    
        default:
            return history
            break;
    }
}