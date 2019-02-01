import React, { Component } from 'react'
import PostList from './PostList'
import UserInfoCard from './UserInfoCard'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
    render() {
        return(
            <div className="ui container">
            <h1>displayBlog</h1>
                {this.props.selectedUser === null ? <PostList /> : <UserInfoCard /> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedUser: state.selectedUser
    }
}

export default connect(mapStateToProps)(App);