import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import spinnerImage from "../layout/spinner.gif"
import Repos from "../repos/Repos"
import GithubContext from "../../context/github/githubContext"

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
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 1);
	color: #fff1e9;
	h1 {
		font-size: 3.3vw;
		text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
		margin: 0 30px;
		cursor: default;
	}
	h3 {
		font-size: 2vw;
		cursor: default;
	}
	a {
		color: #10bd84;
		cursor: pointer;
		transition-duration: 0.3s;
		:hover {
			color: rgba(255, 100, 21, 1);
		}
	}
	@media (max-width: 1500px) {
		h3 {
			font-size: 26px;
		}
	}
	@media (max-width: 1000px) {
		p,
		ul {
			font-size: 18px;
		}
	}
	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		h1 {
			font-size: 6vw;
		}
	}
	@media (max-width: 600px) {
		p,
		ul {
			font-size: 16px;
		}
	}
`
const ReturnButton = styled.button`
	font-family: "karla", sans-serif;
	position: absolute;
	top: 70px;
	left: -30px;
	font-size: 18px;
	text-align: right;
	padding: 10px 20px;
	width: 200px;
	background: white;
	cursor: pointer;
	border: none;
	border-radius: 20px;
	outline: none;
	box-shadow: 0px 2px 4px gray;
	transition: 0.3s ease-in;
	a {
		color: black;
	}
	:hover {
		background: rgba(255, 100, 21, 1);
		transform: translateX(-25px);
		a {
			color: white;
		}
	}
	@media (max-width: 600px) {
		font-size: 16px;
		padding: 8px 18px;
		width: 180px;
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
	cursor: default;
`
const Avatar = styled.img`
	border: 5px outset rgba(255, 100, 21, 1);
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
	margin: 10px;
	border-radius: 50%;
	width: 14vw;
	@media (max-width: 1250px) {
		width: 180px;
	}
`
const ExtendedInfo = styled.div`
	padding: 3vw;
	background: rgba(0, 0, 0, 0.4);
	box-shadow: 0px 0px 5px black;
	border-radius: 20px;
	cursor: default;
`
const VisitProfileButton = styled.button`
	margin: 2vw 0;
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
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;
	cursor: default;
`
const Badge = styled.div`
	background: ${props => props.background};
	color: rgb(60, 60, 60);
	color: ${props => props.color};
	font-size: 16px;
	padding: 10px 2vw;
	text-align: center;
	align-self: center;
	border-radius: 20px;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
	transition: 0.3s ease-in;
	:hover {
		transform: translateY(-2px);
		box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.5);
	}
`

const UserDetails = props => {
	const githubContext = useContext(GithubContext)
	const { getUserDetails, userDetails, loading } = githubContext

	useEffect(
		() => {
			// When we run "getUserDetails" or "getUserRepos" they cause the component to update.
			// Whenever a component updates, it runs useEffect, creating an infinite loop.
			// Therefore we must supply a configuration array as a parameter.
			props.getUserDetails(props.match.params.login) // "match.params" grabs the user name from the URL and is an object of React Router
			props.getUserRepos(props.match.params.login)
		},
		//eslint-disable-next-line
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

	if (props.loading) return <Spinner src={spinnerImage} alt="Loading..." />

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
			<Repos repos={props.userRepos} />
		</React.Fragment>
	)
}

UserDetails.propTypes = {
	userRepos: PropTypes.array.isRequired,
	getUserRepos: PropTypes.func.isRequired
}
export default UserDetails
