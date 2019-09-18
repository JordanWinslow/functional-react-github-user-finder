import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
// COLOR THEME:
// http://paletton.com/#uid=237050ktmC4MF7KJnfqatSW2IHf
const UserCard = styled.div`
	background: #10bd84;
	border-radius: 20px;
	display: grid;
	grid-template-rows: 0.5fr 0.5fr 0.5fr;
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
`
const UserAvatar = styled.div`
	background-image: url(${props => props.url});
	background-position: center;
	background-size: 100px;
	background-repeat: no-repeat;
	border: 5px outset rgba(255, 100, 21, 1);
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
	margin: 40px 0 20px;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	justify-self: center;
`
const UserName = styled.h5`
	color: white;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
	justify-self: center;
	cursor: default;
`
const StyledLink = styled(Link)``
const DetailsButton = styled.div`
	justify-self: center;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 120px;
	height: 40px;
	background: #00291c;
	color: #fff1e9;
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
	border: none;
	border-radius: 3px;
	transition-duration: 0.3s;
	p {
		font-size: 16px;
		font-family: "Karla", sans-serif;
		letter-spacing: 1.4px;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	:hover {
		transform: translateY(-4px);
		background: rgba(255, 100, 21, 1);
		text-shadow: 0px 1px 2px #000000;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
		cursor: pointer;
	}
`

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<UserCard>
			<UserAvatar url={avatar_url} />
			<UserName>{login}</UserName>
			<center>
				<Link to={`/user/${login}`}>
					<DetailsButton>
						<p>Details</p>
					</DetailsButton>
				</Link>
			</center>
		</UserCard>
	)
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired
}

export default UserItem
