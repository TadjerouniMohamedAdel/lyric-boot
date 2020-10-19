export const favoriteReducer = (favorites,action) =>{
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
                let song = action.value
                const index = favorites.findIndex(item => item.id === song.id)
                if(index >= 0){
                    return favorites = favorites.filter(item => item.id !==song.id)

                }else{
                    return [...favorites,song]
                }
        break;
    
        default:
            return favorites
            break;
    }
}