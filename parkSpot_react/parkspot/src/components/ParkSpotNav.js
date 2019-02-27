import React, { Component } from 'react';
import styled from 'styled-components';

class ParkSpotNav extends Component {
    render() {
        const Nav = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 5vw;
  width: 90vw;
  height: 25px;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  p{
    font-size: 1.75rem;
    font-family: 'Oleo Script', cursive;
    margin: 0;
    svg{
      margin-bottom: 5px;
    }
  }
`

const SearchContainer = styled.div`
  background: #fafafa;
  border: 1px solid #dbdbdb;
  width: 90%;
  padding: 7px;
  border-radius: 3px;
  color: #999;
  svg{
    margin-bottom: 5px;
  }
  input{
    border: none;
    font-weight: 300;
    background: transparent;
    text-align: center;
  }
`
const IconsContainer = styled.div`
  width: 25%;
  display: inline-flex;
  justify-content: space-around;
`

const SearchButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
;
`
        return (
            <div>
              <Nav>
       <IconsContainer>
        <SearchContainer>
          search
        </SearchContainer>
        <SearchButton>GO</SearchButton>
        </IconsContainer>  
        <link>User List</link>
        </Nav>
      </div>
        );
    }
}

export default ParkSpotNav;