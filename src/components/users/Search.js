import React, { useState, useContext } from "react"
import styled from "styled-components"
import GithubContext from "../../context/github/githubContext"
import AlertContext from "../../context/alert/alertContext"

/******** STYLING ********/
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
	outline: none;
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

const Search = props => {
	/*** EVENT HANDLERS & STATE ***/
	const githubContext = useContext(GithubContext)
	const { userSearch, users, clearUsers } = githubContext
	const alertContext = useContext(AlertContext)
	const { setAlert } = alertContext

	const [searchText, setSearchText] = useState("")

	const onChange = e => {
		setSearchText(e.target.value) // e.target.value is the captured user keystrokes
	}
	const onSearch = text => {
		text.preventDefault() // to prevent page reload on submit & to allow us to store the value to a variable
		if (searchText === "") {
			setAlert("Please enter some text before searching 😸", "danger") // "danger is defined in App.css. Yes, this is hacky but I'm experimenting with different theme management possibilities"
		} else {
			userSearch(searchText)
			setSearchText("")
		}
	}

	return (
		<FormContainer onSubmit={onSearch}>
			<InputText
				type="text"
				name="searchText"
				placeholder="Search Users..."
				value={searchText}
				onChange={onChange}
			/>
			<SubmitButton type="submit" value="🔍Search"></SubmitButton>
			{users.length > 0 && (
				<ClearButton type="button" onClick={clearUsers}>
					Clear
				</ClearButton>
			)}
			{/*WE MUST MAKE BUTTON type="button" OR ELSE IT WILL SUBMIT THE FORM AGAIN, EVEN WITH NO onSubmit DECLARATION!*/}
		</FormContainer>
	)
}

export default Search
