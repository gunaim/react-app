import axios from 'axios'
import {config} from "../config/config";

/*export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR"*/

export const FETCH_POSTS_PENDING = "FETCH_POSTS_PENDING";
export const FETCH_POSTS_FULFILLED = "FETCH_POSTS_FULFILLED";
export const FETCH_POSTS_REJECTED = "FETCH_POSTS_REJECTED"

export const getAllPosts = () => dispatch => {
    let url = `${config.url}/posts`;
    console.log("getallposts calling",url);
    dispatch({
        type: "FETCH_POSTS",
        payload: axios.get(url)
            .then(response => response.data)
    });
}

/*export const getAllPosts = () => dispatch => {
    let url = `${config.url}/posts`;
    axios.get(url)
        .then(response => response.data)
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
        .catch(error => dispatch({
            type: FETCH_POSTS_ERROR,
            payload: error
        }));
}*/




