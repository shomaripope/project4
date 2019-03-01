import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                   {this.props.user.firstName} <br/>
                   {this.props.user.lastName} <br/>
                   {this.props.user.address} <br/>
                   {this.props.user.city} <br/>
                   {this.props.user.state} <br/>
                   {this.props.user.zip} <br/>
                   <img src = {this.props.user.photo_url} alt/> <br/>
         </div>
        );
    }
}

export default User;