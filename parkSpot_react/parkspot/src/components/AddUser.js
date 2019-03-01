import React, { Component } from 'react';
import axios from 'axios';

class AddUser extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: null,
            photo_url: ''

        }
    }

    handleChange = (event) => {
        const currentChange = event.target.name
        const newUser = { ...this.state.user }
        newUser[currentChange] = event.target.value
        this.setState({ user: newUser });
        console.log(this.state.user)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newUserInfo = { ...this.state.user }
        axios.post('/users', newUserInfo)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label >
                            First Name:
                    </label>
                        <input type="text" onChange={this.handleChange} name='firstName' />
                        <br />
                        <label>
                            Last Name:
                    </label>
                        <input type="text" onChange={this.handleChange} name='lastName' />
                        <br />
                        <label>
                            Address:</label>
                        <input type="text" onChange={this.handleChange} name='address' />
                        <br />
                        <label>
                            City:</label>
                        <input type="text" onChange={this.handleChange} name='city' />
                        <br />
                        <label>
                            State:</label>
                        <input type="text" onChange={this.handleChange} name='state' />
                        <br />
                        <label>
                            Zip Code:</label>
                        <input type="text" onChange={this.handleChange} name='zip' />
                        <br />
                        <label>
                            Photo Url:</label>
                        <input type="text" onChange={this.handleChange} name='photo_url' />

                        {/* <input type="submit" value="submit" /> */}
                        <button> Submit </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddUser;