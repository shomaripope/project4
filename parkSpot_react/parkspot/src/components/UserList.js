import React, { Component } from 'react';

class UserList extends Component {
    
    
    render() {
        return (
            <div>
                <h1> User List </h1> 
                {
                    this.props.user.map((user,i) => {
        
                    return (<div key={i} users={user} >
                    
                    </div>  )
                    })
                    
                } 
                
                

            </div>
        );
    }
}

export default UserList;


