import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectedUser } from '../actions'

class UserHeader extends Component {

    render() {
        console.log(this.props)
        const { user } = this.props

        if (!user) {
            return null
        }

        return (
            <div className="header" onClick={() => this.props.selectedUser(user)}>{user.username}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        user: state.users.find(user => user.id === ownProps.userId),
     }
}
export default connect(mapStateToProps, { selectedUser })(UserHeader);