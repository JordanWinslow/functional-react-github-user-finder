import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import spinnerImage from "../layout/spinner.gif"
import Repos from "../repos/Repos"

/***** STYLING *****/
const Spinner = styled.img`
	width: 200px;
	display: block;
	margin: auto;
`
const UserModal = styled.div`
	margin: 4vw 8vw;
	background: #10bd84;
	padding: 1rem;
	border: rgba(255, 100, 21, 1) 4px solid;
	border-radius: 20px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
	color: #fff1e9;
	h1 {
		font-size: 6vw;
	}
	h3 {
		font-size: 4vw;
	}
	a {
		color: rgba(255, 100, 21, 1);
		cursor: pointer;
	}
	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		p,
		ul {
			font-size: 18px;
		}
		@media (max-width: 600px) {
			p,
			ul {
				font-size: 16px;
			}
		}
	}
`
const ReturnButton = styled.button`
	font-size: 18px;
	text-align: center;
	padding: 10px 20px;
	width: 180px;
	background: white;
	cursor: pointer;
	border: none;
	outline: none;
	box-shadow: 0px 2px 4px gray;
	transition: 0.3s ease-in;
	a {
		color: black;
	}
	:hover {
		background: black;
		a {
			color: white;
		}
	}
`
const BasicInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: auto;
	justify-content: center;
	align-items: center;
	text-align: center;
`
const Avatar = styled.img`
	border-radius: 50%;
	width: 25vw;
`
const ExtendedInfo = styled.div`
	padding: 3vw;
	background: rgba(0, 0, 0, 0.4);
	border-radius: 20px;
`
const VisitProfileButton = styled.button`
	margin-top: 2vw;
	background: #00291c;
	color: #fff1e9;
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
	border: none;
	border-radius: 3px;
	transition-duration: 0.3s;
	p {
		padding: 15px 20px;
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
const BadgeContainer = styled.div`
	margin: auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
`
const Badge = styled.div`
	background: ${props => props.background};
	color: rgb(60, 60, 60);
	color: ${props => props.color};
	margin: 0 2vw 2vw 2vw;
	font-size: 16px;
	padding: 5px 2vw;
	text-align: center;
	border-radius: 20px;
	box-shadow: 0px 2px 3px #000000;
`

const UserDetails = props => {

	useEffect(
		() => {
			// When we run "getUserDetails" or "getUserRepos" they cause the component to update.
			// Whenever a component updates, it runs useEffect, creating an infinite loop.
			// Therefore we must supply a configuration array as a parameter.
			props.getUserDetails(props.match.params.login) // "match.params" grabs the user name from the URL and is an object of React Router
			props.getUserRepos(props.match.params.login)
		},
		[] /* This empty array tells useEffect to update only when a parameter in the array updates. If no parameter is supplied it runs only once.*/
	)

		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			company,
			followers,
			following,
			public_repos,
			public_gists,
			hireable
		} = props.userDetails // destructure the API returned object into keys/values

		const { loading, userRepos } = props
		if (loading) return <Spinner src={spinnerImage} alt="Loading..." />

		return (
			<React.Fragment>
				<ReturnButton>
					<Link to="/">Back to Search</Link>
				</ReturnButton>
				<UserModal>
					<BasicInfo>
						<h1>{name}</h1>
						<Avatar src={avatar_url} />
						<p>
							Location: {location}
							<br />
							Hireable: {hireable ? "✔️" : "❌"}
						</p>
					</BasicInfo>
					<ExtendedInfo>
						{bio && (
							<React.Fragment>
								<h3>Bio:</h3>
								<p>{bio}</p>
							</React.Fragment>
						)}
						<br />
						<ul>
							{login && (
								<React.Fragment>
									<li>
										<b>Username:</b> {login}
									</li>
								</React.Fragment>
							)}
							{company && (
								<React.Fragment>
									<li>
										<b>Company:</b> {company}
									</li>
								</React.Fragment>
							)}
							{blog && (
								<React.Fragment>
									<li>
										<b>Website:</b> <a href={`https://${blog}`}>{blog}</a>
									</li>
								</React.Fragment>
							)}
						</ul>
					</ExtendedInfo>
					<center>
						<a href={html_url} style={{ color: "white" }}>
							<VisitProfileButton>
								<p>GitHub Profile</p>
							</VisitProfileButton>
						</a>
					</center>
					<BadgeContainer>
						<Badge background="aquamarine">Followers: {followers}</Badge>
						<Badge background="tomato">Following: {following}</Badge>
						<Badge background="slategray" color="#FFFFFF">
							Public Repos: {public_repos}
						</Badge>
						<Badge background="azure">Public Gists: {public_gists}</Badge>
					</BadgeContainer>
				</UserModal>
				<br />
				<Repos repos={userRepos} />
			</React.Fragment>
		)
	}

UserDetails.propTypes = {
	loading: PropTypes.bool.isRequired,
	userDetails: PropTypes.object.isRequired,
	userRepos: PropTypes.array.isRequired,
	getUserDetails: PropTypes.func.isRequired,
	getUserRepos: PropTypes.func.isRequired
}
export default UserDetails
