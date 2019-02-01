import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deselectedUser } from '../actions'

class UserInfoCard extends Component {
    render() {
        const { user } = this.props
        if (!user) {
            return null
        }

        console.log(this.props)

        return(
            <div onClick={this.props.deselectedUser}>
                {user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.selectedUser
    }
}

export default connect(mapStateToProps, { deselectedUser })(UserInfoCard)