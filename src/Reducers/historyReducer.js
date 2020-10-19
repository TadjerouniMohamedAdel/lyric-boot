export const historyReducer = (history,action) =>{
    switch (action.type) {
        case "HISTORY_PUSH":
            return [...history,action.value]
            break;
    
        case "CLEAR_HISTORY":
            console.log("CLEAR_HISTORY")
            return []
            break;
        default:
            return history
            break;
    }
}