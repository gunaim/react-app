// import {FETCH_POSTS,FETCH_POSTS_ERROR} from '../actions/Posts'
import {FETCH_POSTS_FULFILLED, FETCH_POSTS_PENDING, FETCH_POSTS_REJECTED} from '../actions/Posts'

const initialState = {
    fetching: false,
    fetched: false,
    posts: [],
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
          case FETCH_POSTS_PENDING: {
              return {
                  ...state,
                  fetching: true
              };
              break;
          }
          case FETCH_POSTS_FULFILLED: {
              console.log("action.payload",action.payload)
              return {
                  ...state,
                  posts: action.payload,
                  fetching: false
              };
              break;
          }
          case FETCH_POSTS_REJECTED: {
              return {
                  ...state,
                  error: action.payload,
                  fetching: false
              }
          }

     /*   case FETCH_POSTS: {
            console.log("FETCH_POSTS");
            return {
                ...state,
                posts: action.payload
            };
        }
        case FETCH_POSTS_ERROR: {
            console.log("FETCH_POSTS_ERROR");
            return {
                ...state,
                error: action.payload
            };

        }*/
        default:
            return state;
    }
}
