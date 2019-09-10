import React, { Component } from "react"
import styled from "styled-components"
// COLOR THEME:
// http://paletton.com/#uid=237050ktmC4MF7KJnfqatSW2IHf

const NavigationHeader = styled.nav`
	background: rgba(255, 100, 21, 1);
	height: 70px;
	color: #fff1e9;
	display: grid;
	grid-template-columns: 1fr 3fr;
	#logo {
		justify-self: start;
		align-self: center;
	}
	#navItems {
		text-decoration: none;
		justify-self: end;
		align-self: center;
		display: grid;
		grid-template-columns: 1fr 1fr;
		ul {
			font-style: none;
		}
	}
`

export default class Navbar extends Component {
	render() {
		return (
			<NavigationHeader>
				<p id="logo" className="large">
					GitFinder
				</p>
				<ul id="navItems" className="large">
					<li>Home</li>
					<li>About</li>
				</ul>
			</NavigationHeader>
		)
	}
}
