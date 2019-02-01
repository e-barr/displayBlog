import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader'
import './PostList.css'

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers()
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item item-details" key={post.id} >
                    <i className="large middle aligned icon user" style={{ padding: '0 10px 0 10px'}} />
                        <div className="content">
                            <div className="description">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                            <br></br>
                            <UserHeader userId={post.userId} />
                        </div>
                </div>
            )
        })
    }
    
    render() {
        return(
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);