import React, { Component } from "react"
import styled from "styled-components"

const userData = {
  login: "mojombo",
  html_url: "https://github.com/mojombo",
  avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4"
}

const UserCard = styled.div`
  padding: 1rem;
  margin: 1rem;
  background: #10bd84;
  display: grid;
  grid-template-rows: 1fr 0.5fr 0.5fr;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
`
const UserAvatar = styled.div`
  background-image: url(${props => props.url});
  background-position: center;
  background-size: 100px;
  background-repeat: no-repeat;
  margin: 40px 0 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  justify-self: center;
`
const UserName = styled.h5`
  color: #00291c;
  justify-self: center;
  cursor: default;
`
const DetailsButton = styled.button`
  justify-self: center;
  width: 120px;
  height: 40px;
  background: #fff1e9;
  color: #00291c;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 10px;
  transition-duration: 0.3s;
  p {
    font-size: 18px;
    font-family: "Karla", sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  :hover {
    background: #00291c;
    color: #fff1e9;
    cursor: pointer;
  }
`

class UserItem extends Component {
  render() {
    return (
      <UserCard>
        <UserAvatar url={userData.avatar_url} />
        <UserName>{userData.login}</UserName>
        <DetailsButton>
          <p>
            <a href={userData.html_url}>Details</a>
          </p>
        </DetailsButton>
      </UserCard>
    )
  }
}

export default UserItem
