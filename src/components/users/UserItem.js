import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
// COLOR THEME:
// http://paletton.com/#uid=237050ktmC4MF7KJnfqatSW2IHf
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
	color: white;
	text-shadow: 1px 3px 0 #969696;
	justify-self: center;
	cursor: default;
`
const DetailsButton = styled.button`
	justify-self: center;
	width: 120px;
	height: 40px;
	background: #00291c;
	color: #fff1e9;
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
	border: none;
	border-radius: 3px;
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
		background: #fff1e9;
		color: #00291c;
		cursor: pointer;
	}
`

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<UserCard>
			<UserAvatar url={avatar_url} />
			<UserName>{login}</UserName>
			<DetailsButton>
				<p>
					<a href={html_url}>Details</a>
				</p>
			</DetailsButton>
		</UserCard>
	)
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired
}

export default UserItem
