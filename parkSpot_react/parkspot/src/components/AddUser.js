import React, { Component } from 'react';

class AddUser extends Component {
    state={
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

    }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.newUser);
    event.preventDefault();
  }
    render() {
        return (
            <div>
            <form onSubmit={() => this.handleSubmit.bind(this)}>
        <label>
          First Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} name='firstName'/>
        </label> <br/>
        <label>
          Last Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} name='lastName'/>
        </label><br/>
        <label>
          Address:
          <input type="text" value={this.state.value} onChange={this.handleChange} name='address'/>
        </label><br/>
        <label>
          City:
          <input type="text" value={this.state.value} onChange={this.handleChange} name='city'/>
        </label><br/>
        <label>
          State:
          <input type="text" value={this.state.value} onChange={this.handleChange} name='state'/>
        </label><br/>
        <label>
          Zip Code:
          <input type="text" value={this.state.value} onChange={this.handleChange} name='zip'/>
        </label><br/>
        <label>
          Photo Url:
          <input type="text" value={this.state.value} onChange={this.handleChange} name='photo_url'/>
        </label>
        <input type="submit" value="submit" />
      </form>
      </div>
        );
    }
}

export default AddUser;