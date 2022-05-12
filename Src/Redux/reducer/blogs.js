import Type from '../constant'
const initialState = {
    all_blogs : {},
    blog_detail : {}

};

function blogReducer(state = initialState, action) {
    switch (action.type) {
        case Type.SET_ALL_BLOGS:
            return { ...state, all_blogs: action.payload }
            break;
     
        case Type.BLOG_DETAIL : 
            return{
                ...state,
                blog_detail : action.payload
            }
        
        default:
            return state;
    }
};

export default blogReducer;