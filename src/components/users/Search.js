import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const FormContainer = styled.form`
	margin: 0 5vw;
	display: grid;
	grid-gap: 1rem;
`
const InputText = styled.input`
	font-family: "Karla", sans-serif;
	font-size: 1.2rem;
	letter-spacing: 1.5px;
	margin-top: 20px;
	padding: 0.5rem 0 0.5rem 10px;
	background: rgba(255, 255, 255, 0.9);
	color: #10bd84;
	outline: none;
	border-radius: 15px;
	::placeholder {
		color: #10bd84;
	}
`
const SubmitButton = styled.input`
	font-family: "Karla", sans-serif;
	margin-bottom: 20px;
	padding: 0.5rem 0;
	font-size: 1.2rem;
	letter-spacing: 1.2px;
	border: none;
	background: rgba(255, 100, 21, 1);
	color: #fff1e9;
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
	text-shadow: 0px 1px 2px #000000;
	outline: none;
	border-radius: 15px;
	cursor: pointer;
	transition-duration: 0.2s;

	:hover {
		transform: translateY(-1px);
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
	}
`
const ClearButton = styled.button`
	font-family: "Karla", sans-serif;
	margin-top: -20px;
	margin-bottom: 20px;
	padding: 0.5rem 0;
	font-size: 1.2rem;
	text-align: center;
	letter-spacing: 1.2px;
	border: none;
	background: rgba(69, 69, 69, 0.9);
	color: #fff1e9;
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
	text-shadow: 0px 1px 2px #000000;
	transition-duration: 0.2s;
	border-radius: 15px;
	cursor: pointer;

	:hover {
		transform: translateY(-1px);
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
	}
`

class Search extends Component {
	state = {
		searchText: "",
		clearUsersButton: false
	}
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value }) // e.target.name is the InputText name="searchText" and e.target.value is InputText value="this.state.searchText"
	} // we put [e.target.name] in brackets as an HTML selector to grab the name value from the input form
	onSearch = searchText => {
		searchText.preventDefault() // to prevent page reload on submit & to allow us to store the value to a variable
		if (this.state.searchText === "") {
			this.props.setAlert(
				"Please enter some text before searching 😸",
				"danger"
			)
		} else {
			this.props.userSearch(this.state.searchText) // pass the submitted text UP into a prop called "userSearch" which also has a method in the App component. This is to demonstrate the unnecessary complexity added by using classes instead of functional React hoook based components

			// THIS IS WHERE THE MAGIC HAPPENS
			this.setState({ searchText: "", clearUsersButton: true }) // clear the search
		}
	}
	clearUsers = () => {
		this.setState({ searchText: "", clearUsersButton: false })
		this.props.clearUsers()
	}
	render() {
		return (
			<FormContainer onSubmit={this.onSearch}>
				<InputText
					type="text"
					name="searchText"
					placeholder="Search Users..."
					value={this.state.searchText}
					onChange={this.onChange}
				/>
				<SubmitButton type="submit" value="🔍Search"></SubmitButton>
				{this.state.clearUsersButton ? (
					<ClearButton type="button" onClick={this.clearUsers}>
						Clear
					</ClearButton>
				) : null}
				{/*WE MUST MAKE BUTTON type="button" OR ELSE IT WILL SUBMIT THE FORM AGAIN, EVEN WITH NO onSubmit DECLARATION!*/}
			</FormContainer>
		)
	}
}

Search.propTypes = {
	userSearch: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired
}

export default Search
