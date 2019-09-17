import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from "axios"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Alert from "./components/layout/Alert"
import Search from "./components/users/Search"
import UserDetails from "./components/users/UserDetails"
import UserGrid from "./components/users/UserGrid"
import About from "./components/pages/About"
// import StyleGuide from "./components/StyleGuide"
import GithubState from "./context/github/GithubState"

const App = () => {
	const [userRepos, setUserRepos] = useState([]) // clear search button displays on true
	const [alert, setAlert] = useState(null) // alert displays {message: "message", type: "type"}

	const createAlert = (message, type) => {
		setAlert({ message, type })
		// MESSAGE IS REMOVED AFTER 4 SECONDS
		setTimeout(() => {
			setAlert(null)
		}, 4000)
	}

	const getUserRepos = async username => {
		setLoading(true)
		await axios
			.get(
				`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then(response => {
				setUserRepos(response.data)
				setLoading(false)
			})
			.catch(error => createAlert(error, "danger")) // report GitHub Server Error to Top of User Screen if Any
	}

	return (
		<GithubState>
			<Router>
				<Navbar />
				{/*VIEW STYLE GUIDE WITH <StyleGuide />*/}
				<Alert alert={alert} />
				<Switch>
					<Route
						exact
						path="/"
						render={props => (
							<React.Fragment>
								<Search setAlert={createAlert} />
								<UserGrid />
							</React.Fragment>
						)}
					/>
					<Route exact path="/about" component={About} />
					<Route
						exact
						path="/user/:login"
						render={props => (
							<UserDetails
								{...props}
								getUserRepos={getUserRepos}
								userRepos={userRepos}
							/>
						)}
					/>
				</Switch>
			</Router>
		</GithubState>
	)
}

export default App
