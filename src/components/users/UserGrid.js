import React from "react"
import UserItem from "./UserItem"
import styled from "styled-components"
import spinnerImage from "../layout/spinner.gif"
import PropTypes from "prop-types"

const GridContainer = styled.div`
  margin: 0 5vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`

const Spinner = styled.img`
  width: 200px;
  display: block;
  margin: auto;
`

const UserGrid = ({ users, loading }) => {
  if (loading) return <Spinner src={spinnerImage} alt="Loading..." />

  const User = users.map(user => {
    return <UserItem key={user.id} user={user} />
  })

  return <GridContainer>{User}</GridContainer>
}
UserGrid.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}
export default UserGrid
