const getUserTripRequestsReducer =( state = { myTrips: [] }, action )=>{
    switch (action.type) {
        case 'GET_USER_TRIP_REQUESTS_SUCCESS': 
        return{
            ...state,
            myTrips: action.payload,
        }
        default: return state
    }
}
export default getUserTripRequestsReducer;