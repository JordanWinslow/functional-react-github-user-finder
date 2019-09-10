import React from "react"
import UserItem from "./UserItem"
import styled from "styled-components"

const GridContainer = styled.div`
	margin: 5vw;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1rem;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 780px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

const UserGrid = props => {
	const User = props.users.map(user => {
		return <UserItem key={user.id} user={user} />
	})
	return <GridContainer>{User}</GridContainer>
}

export default UserGrid
