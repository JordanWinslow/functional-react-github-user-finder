import React, { useReducer } from "react"
import axios from "axios"
import GithubContext from "./githubContext"
import githubReducer from "./githubReducer"

import {
	SEARCH_USERS,
	GET_USER,
	GET_REPOS,
	CLEAR_USERS,
	SET_LOADING
} from "../types"

const GithubState = props => {
	const initialState = {
		users: [],
		userDetails: {},
		userRepos: [],
		loading: false
	}

	const [state, dispatch] = useReducer(githubReducer, initialState)

	// ------- METHODS ------- //
	const userSearch = async textInput => {
		setLoading()
		const githubAPI = await axios.get(
			`https://api.github.com/search/users?q=${textInput}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)

		dispatch({ type: SEARCH_USERS, payload: githubAPI.data.items })
	}
	// GET USER DETAILS
	const getUserDetails = async username => {
		setLoading()
		const githubAPI = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		)
		dispatch({ type: GET_USER, payload: githubAPI.data })
	}

	const getUserRepos = async username => {
		setLoading()
		const githubAPI = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		)
		dispatch({ type: GET_REPOS, payload: githubAPI.data })
	}

	const clearUsers = () => dispatch({ type: CLEAR_USERS })

	const setLoading = () => dispatch({ type: SET_LOADING })

	return (
		<GithubContext.Provider
			value={{
				// STATE
				users: state.users,
				userDetails: state.userDetails,
				userRepos: state.userRepos,
				loading: state.loading,
				// METHODS
				userSearch,
				getUserDetails,
				getUserRepos,
				clearUsers
			}}
		>
			{props.children}
			{/* Wrap the entire application in the state container */}
		</GithubContext.Provider>
	)
}

export default GithubState
