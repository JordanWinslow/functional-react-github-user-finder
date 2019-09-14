import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import spinnerImage from "../layout/spinner.gif"

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

class UserDetails extends Component {
	componentDidMount() {
		this.props.getUserDetails(this.props.match.params.login) // "match.params" grabs the user name from the URL
	}

	render() {
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
		} = this.props.userDetails // destructure the API returned object into keys/values

		const { loading } = this.props
		if (loading) return <Spinner src={spinnerImage} alt="Loading..." />
		return (
			<React.Fragment>
				<Link to="/">Back to Search</Link>
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
						<VisitProfileButton>
							<p>
								<a href={html_url}>GitHub Profile</a>
							</p>
						</VisitProfileButton>
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
			</React.Fragment>
		)
	}
}

UserDetails.propTypes = {
	loading: PropTypes.bool.isRequired,
	userDetails: PropTypes.object.isRequired,
	getUserDetails: PropTypes.func.isRequired
}
export default UserDetails
