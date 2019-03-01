import React, { Component } from 'react';
import User from './User';


class UserList extends Component {
    
    
    render() {
        return (
            <div>
                <h1> User List </h1> 
                <section>
                {
                    this.props.users.map((user,i) => {
        
                        return (
                            <User key={i} user={user} />
                        );
                    })
                } 
                </section>

            </div>
        );
    }
}

export default UserList;


