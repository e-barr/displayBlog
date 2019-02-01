import { combineReducers } from 'redux'
import postsReducer from './PostsReducer'
import usersReducer from './UsersReducer'
import selectedUsersReducer from './SelectedUserReducer'

export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
    selectedUser: selectedUsersReducer
})