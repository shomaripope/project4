import React, { Component } from 'react';
import Spot from './Spot';

class User extends Component {
    render() {
        {
            this.props.spot.map((spot,i) => {
                return (
                    <div>HEY IM SPOT LIST MAP 
                    <Spot key={i} spot={spot.locationInfo} />
                    </div>
                    );
            })
        } 

        return (
            <div className="card"> <br/>
                                    User Pic: <img src = {this.props.user.photo_url} alt=''/> <br/>
                                    First Name: {this.props.user.firstName} <br/>
                                    Last Name: {this.props.user.lastName} <br/>
                                    Address: {this.props.user.address} <br/>
                                    City: {this.props.user.city} <br/>
                                    State: {this.props.user.state}<br/>
                                    Zip: {this.props.user.zip} <br/>
                                    {this.props.user.firstName}'s Spots: {spot} <br/>
                    </div>
        );
    }
}

export default User;