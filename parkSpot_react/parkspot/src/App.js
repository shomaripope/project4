import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import ParkSpotNav from './components/ParkSpotNav';
import User from './components/User';

class App extends Component {
  state = {
    users:[
        {
            id: 1,
        firstName: 'shomari',
        lastName: 'pope',
        city: 'atlanta',
        state: 'ga',
        photo_url: 'src/images/profilepic.png',
        },
        {
            id: 2,
        firstName: 'jared',
        lastName: 'letto',
        city: 'lsnsing',
        state: 'mi',
        photo_url: 'https://livability.com/sites/default/files/LansingMI.jpg',
        },
        {
            id: 3,
        firstName: 'chris',
        lastName: 'tucker',
        city: 'tallahassee',
        state: 'fl',
        photo_url: 'https://floridamalpractice.com/wp-content/uploads/2017/08/MLF_Tal.jpg',
        }
    ]
}
  render() {
    const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
    const Title = styled.h1`
  font-size: 20em;
  color: purple;
`;
    return (
      <div>
        <Wrapper>
        <ParkSpotNav />
        <Title>Park Spot</Title>
        <User user={this.state.users} />
        </Wrapper>
      </div>
    );
  }
}

export default App;
