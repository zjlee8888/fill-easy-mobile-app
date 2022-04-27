import { combineReducers } from 'redux';
import userReducer from './userReducer';

// other reducers needs to import here
const rootReducer = combineReducers({
    userInfo: userReducer,
    // if there are other reducers , we can add here one by one
});
export default rootReducer;