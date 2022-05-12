import { combineReducers } from 'redux';
import formReducer from './companyform';
import userReducer from './auth'
import blogReducer from './blogs'
// other reducers needs to import here
const rootReducer = combineReducers({
    formReducer: formReducer,
    userReducer : userReducer,
    blogReducer : blogReducer
    // if there are other reducers , we can add here one by one
});
export default rootReducer;