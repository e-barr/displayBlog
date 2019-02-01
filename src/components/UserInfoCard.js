import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserInfoCard extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
                UserInfoCard
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.selectedUser
    }
}

export default connect(mapStateToProps)(UserInfoCard)