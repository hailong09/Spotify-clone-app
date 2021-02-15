export const initialState = {
    user:null,
    playlists: [],
    playing:false,
    item: null,
    // token: "BQALScs9I5znGAozrD1bYV1EhEBmfPFFfSm5h-zfIQm8rm05Z-RzZ212Osa1jQT7KYxs8K5RFDGsLdbJlRiMTbG4zBCTwP4ozf4pGRDedK_CSebAc37pExN5DBuPHhvza8O5cLQPYD3mb9wJ-sKGXpXWFucZq9OtGo4JgseQ10OBz5Pa0-ko",
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
              discover_weekly: action.discover_weekly
            
            }
        default: return state

    }

}

export default reducer;