import React from "react"
import styled from "styled-components"
import bgBottom from "../../images/backgroundbottom.jpg"
import bgTop from "../../images/backgroundtop.jpg"

const Container = styled.section`
	color: rgba(230, 230, 230, 1);
`
const Header2 = styled.div`
	padding: 10vh;
	color: #10bd84;
	text-align: center;
	text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
`

const HeroSection = styled.div`
	background-image: url(${bgTop});
	background-repeat: no-repeat;
	background-size: cover;
	padding: 10vw 20vw;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
	h1 {
		backdrop-filter: blur(5px);
	}
	p {
		backdrop-filter: blur(5px);
		line-height: 30px;
		margin: 30px 0;
	}
	@media (max-width: 700px) {
		padding: 10vw;
	}
`

const Technology = styled.div`
	background-image: url(${bgBottom});
	background-repeat: no-repeat;
	background-size: cover;
	padding: 5vh;
	ul {
		list-style-type: none;
		padding: 5vh 20vw;
		@media (max-width: 700px) {
			padding: 5vh 6vw;
		}
	}
	li {
		backdrop-filter: blur(10px);
		margin: 3vh 0;
		padding: 1rem;
		border: 1px solid rgba(200, 200, 200, 0.9);
		transition-duration: 0.3s;
		cursor: pointer;
		:hover {
			transform: translateY(-10px);
			background: rgba(255, 100, 21, 0.8);
		}
	}
`

const About = () => {
	return (
		<Container>
			<HeroSection>
				<h1>About GitFinder</h1>
				<p>
					GitFinder is a deceptively simple web application which searches
					GitHub for user profiles and returns them in a responsive grid.
				</p>
				<p>
					What makes this app stand out from similar web developer portfolio
					projects is the sharp attention to detail and 100% from-scratch code
					incorporating the various modern technologies listed below:
				</p>
			</HeroSection>
			<Header2>
				<h3>WHAT'S UNDER THE HOOD?</h3>
			</Header2>
			<Technology>
				<ul>
					<li>React</li>
					<li>React Router</li>
					<li>Styled-Components</li>
					<li>Axios (For Receiving Data From GitHub API)</li>
					<li>JavaScript Promises & Async/Await</li>
					<li>CSS3 Keyframe Animations</li>
					<li>CSS Grid, Media Queries & Dynamic Scaling (vw)</li>
					<li>Asynchronous Component Rendering (Alert Message)</li>
				</ul>
			</Technology>
		</Container>
	)
}

export default About
