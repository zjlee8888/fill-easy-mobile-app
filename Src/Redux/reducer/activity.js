import Type from '../constant'
const initialState = {
    all_activity : {},
};

function activityReducer(state = initialState, action) {
    switch (action.type) {
   
     
        case "GET_ACTIVITY" : 
            return{
                ...state,
                all_activity : action.payload
            }
        
        default:
            return state;
    }
};

export default activityReducer;