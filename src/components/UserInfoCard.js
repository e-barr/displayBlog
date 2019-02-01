import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deselectedUser } from '../actions'
import './UserInfoCard.css'

const google_api = `${process.env.REACT_APP_GOOGLE_MAPS}`

class UserInfoCard extends Component {
    render() {
        const { user } = this.props
        if (!user) {
            return null
        }

        console.log(this.props)
        const { street, suite, city, zipcode, geo } = user.address
        const { name, catchPhrase, bs } = user.company
        const iframeSrc = `https://www.google.com/maps/embed/v1/place?q=${geo.lat}%2C%20${geo.lng}&key=${google_api}`
        
        return(
            <div className="user-info-card-container">
                <div>
                    <button onClick={this.props.deselectedUser} style={{ float: 'right'}}>X</button>
                </div>
                <h1>{user.username}</h1>
                <h3>aka {user.name}</h3>
                <br></br>
                
                <i className="envelope outline icon"></i><a href={`mailto:${user.email}`}>{user.email}</a><br></br>
                <i className="map marker icon"></i>{`${street}`}<br></br>
                {`${suite}`}<br></br>
                {`${city} ${zipcode}`}<br></br>
                <h3>says they are currently located at: </h3><br></br>
                <strong>{`${geo.lat}°, ${geo.lng}°`}</strong><br></br>
                <iframe name="gMap" src={iframeSrc} width="400" height="250" style={{ border: '0' }} allowFullScreen title={user.username}></iframe><br></br>
                

                <h3>works at</h3>
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