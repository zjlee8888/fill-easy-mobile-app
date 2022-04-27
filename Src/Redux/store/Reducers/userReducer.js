const initialState = {
    userData: {},
    userToken: '',
    dynamicFormGenrate:[]
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, userData: action.payload }
            break;
        case 'SET_TOKEN':
            return { ...state, userToken: action.payload }
            break;

        case 'DYNAMIC_FORM_GENRATE':
            return{...state,dynamicFormGenrate:action.payload}
        
        default:
            return state;
    }
};

export default userReducer;