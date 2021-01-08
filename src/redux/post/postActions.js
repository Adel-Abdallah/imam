import axios from 'axios'
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from './postTypes'



export const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

const fetchPostsSuccess = posts => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

const fetchPostsFailure = error => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest())
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // response.data is the posts user
                const posts = response.data
                dispatch(fetchPostsSuccess(posts))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchPostsFailure(error.message))
            })
    }
}
