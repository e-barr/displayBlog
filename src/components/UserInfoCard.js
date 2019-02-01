import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deselectedUser } from '../actions'
import './UserInfoCard.css'

class UserInfoCard extends Component {
    render() {
        const { user } = this.props
        if (!user) {
            return null
        }

        console.log(this.props)
        const { street, suite, city, zipcode, geo } = user.address
        const { name, catchPhrase, bs } = user.company

        return(
            <div className="user-info-card-container">
                <div>
                    <button onClick={this.props.deselectedUser} style={{ float: 'right'}}>X</button>
                </div>
                <h1>{user.username}</h1>
                <h3>aka {user.name}</h3>
                <p>contact</p>
                <ul>
                    <li><i class="envelope outline icon"></i>
                    <a href="mailto:">{user.email}</a>
                    </li>
                    <li>
                    <i class="map marker icon"></i>{`${street} ${suite} ${city} ${zipcode}`}
                    </li>
                    <li>geocoordinates: {`${geo.lat} ${geo.lng}`}</li>
                </ul>

                <p>company</p>
                <h3>{name}</h3>
                <p>
                    {catchPhrase}<br></br>
                    {bs}
                </p>

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