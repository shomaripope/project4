import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import logo from './images/parkingSpot3.jpg';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import ParkSpotNav from './components/ParkSpotNav';
import axios from 'axios';
import SpotList from './components/SpotList';
import User from './components/User';


class App extends Component {
  state = {
    users:[
            {
                id: 1,
            firstName: 'shomari',
            lastName: 'pope',
            address: '11747 Upton rd',
            city: 'atlanta',
            state: 'ga',
            zip: 48808,
            photo_url: 'https://healthelevate.com/wp-content/uploads/2019/04/profilepic.png ',
            locationInfo: [
                            {
                              company: 'Ponce City Market',
                              spotAvailable: true,
                              free: true,
                              address: '11747 Apple rd',
                              city: 'atlanta',
                              state: 'ga',
                              zip: 48808,
                              sizeCapacity: '5 X 17',
                            },

                            {
                              company: 'Ponce City Market',
                              spotAvailable: true,
                              free: true,
                              address: '11747 Bana rd',
                              city: 'atlanta',
                              state: 'ga',
                              zip: 48808,
                              sizeCapacity: '5 X 17',
                            },
                            ]
            },

            {
              id: 2,
              firstName: 'jared',
              lastName: 'letto',
              address: '11432 Upton rd',
              city: 'lsnsing',
              state: 'mi',
              zip: 48808,
              photo_url: 'https://livability.com/sites/default/files/LansingMI.jpg',
              locationInfo: [
                              {
                                company: 'Private House/Lot',
                                spotAvailable: false,
                                free: false,
                                address: '11432 Cat rd',
                                city: 'lsnsing',
                                state: 'mi',
                                zip: 48808,
                                sizeCapacity: '5 X 17',
                              },
                              ]
            },

            {
            id: 3,
            firstName: 'chris',
            lastName: 'tucker',
            address: '11477 Upton rd',
            city: 'tallahassee',
            state: 'fl',
            zip: 48808,
            photo_url: 'https://floridamalpractice.com/wp-content/uploads/2017/08/MLF_Tal.jpg',
            locationInfo: [
                            {
                              company: 'Taco Bell',
                              spotAvailable: true,
                              free: false,
                              address: '11477 Draw rd',
                              city: 'tallahassee',
                              state: 'fl',
                              zip: 48808,
                              sizeCapacity: '7 X 17',
                            },

                            {
                              company: 'Taco Bell',
                              spotAvailable: true,
                              free: false,
                              address: '11477 Fish rd',
                              city: 'tallahassee',
                              state: 'fl',
                              zip: 48808,
                              sizeCapacity: '7 X 17',
                            },

                            {
                              company: 'Taco Bell',
                              spotAvailable: true,
                              free: false,
                              address: '114 Great rd',
                              city: 'tallahassee',
                              state: 'fl',
                              zip: 48808,
                              sizeCapacity: '7 X 17',
                            },
                          ]
              }
          ]
          }
//end state

componentDidMount() {
  this.getUsers()
}

getUsers = () => {
  axios.get("api/users/").then((res) => {
    console.log(res.data)
    this.setState({ users: res.data })
  })
}

  render() {
    const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
    const Title = styled.h1`
  font-size: 10em;
  color: purple;
`;
const SubTitle = styled.h2`
  font-size: 5em;
  color: purple;
`;
    return (
      <div>
        <Wrapper>
        <ParkSpotNav />
        <Title>Park Spot</Title>
        <SubTitle>...an easier way to find a spot</SubTitle>
        <img src = {logo} alt=''/>
        </Wrapper>
        <UserList users={this.state.users} />
        <SpotList spot={this.state.users} />
        
        
      </div>
    );
  }
}

export default App;
