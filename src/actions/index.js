import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch , getState)=> {
    await dispatch(fetchPosts())

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
}

export const fetchPosts = () => async dispatch => {

    const resp = await jsonPlaceholder.get('/posts')
    
    dispatch({
        type: 'FETCH_POSTS',
        payload: resp.data
    })
}

export const fetchUser = id => async dispatch => {
    const resp = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({
        type: 'FETCH_USER',
        payload: resp.data
    })
}

export const selectedUser = user => {
    return {
        type: 'SELECTED_USER',
        payload: user
    }    
}

export const deselectedUser = () => {
    return {
        type: 'DESELECTED_USER',
        payload: null
    }
}
// export const fetchUser = (id) => async dispatch => {
//     _fetchUser(id, dispatch)
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const resp = await jsonPlaceholder.get(`/users/${id}`)

//     dispatch({
//         type: 'FETCH_USER',
//         payload: resp.data
//     })
// })
