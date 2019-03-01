import React, { Component } from 'react';

class Spot extends Component {
    render() {
        return (
            <div>
               First Name: {this.props.user.firstName} <br/>
               Last Name: {this.props.user.lastName} <br/>
               Address: {this.props.user.address} <br/>
               City: {this.props.user.city} <br/>
               State: {this.props.user.state} <br/>
               Photo: {this.props.user.photo_url} 
            </div>
        );
    }
}

export default Spot;