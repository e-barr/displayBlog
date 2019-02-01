import React from 'react'
import PostList from './PostList'
import UserInfoCard from './UserInfoCard'
import './App.css'

const App = () => {
    return (
        <div className="ui container">
            <PostList />
            <UserInfoCard />
        </div>
    )
}

export default App;