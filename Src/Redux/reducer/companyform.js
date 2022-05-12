const initialState = {
    companylist : [],
    dynamicFormGenrate: []
};

function formReducer(state = initialState, action) {
    switch (action.type) {

        case 'DYNAMIC_FORM_GENRATE':
            return { ...state, dynamicFormGenrate: action.payload }

        case 'COMPANY_LIST': 
            return{
                ...state,
                companylist : action.payload
            }
        default:
            return state;company
    }
};

export default formReducer;