import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                    {
                    this.props.user.map((users,i) => {
        
                        return (
                            <User key={i} usersList={users} />
                        );
                    }) 
                    }
         </div>
        );
    }
}

export default User;