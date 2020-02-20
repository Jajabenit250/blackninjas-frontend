import axios from "axios";
import { config } from 'dotenv';

config();

export const getUserTripRequestsAction = (props) => async dispatch => {
    // dispatch({ type: "LOADING", payload: true });
    const token = localStorage.getItem('token');
    console.log('jgfhgklhdfxghfjgyjth',token);
    
    try {
        const results = await axios.get(`${process.env.BACKEND_BASE_URL}/api/v1/trips/my-trip-requests`,{
            headers: {
                'Content-Type': 'application/json',
                'token': `Bearer ${token}`,
            }
        });
        console.log(results);
        
        // dispatch({ type: "GET_USER_TRIP_REQUESTS_SUCCESS", payload: results.data.data });
        // dispatch({ type: "LOADING", payload: false });
    } catch (error) {
        console.log(error);
        
        dispatch({ type: "GET_USER_TRIP_REQUESTS_FAILED", payload: true });
        dispatch({ type: "LOADING", payload: false });
    }

}