import React from "react"
import axios from "axios"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Alert from "./components/layout/Alert"
import Search from "./components/users/Search"
import UserGrid from "./components/users/UserGrid"
// import StyleGuide from "./components/StyleGuide"

class App extends React.Component {
	state = {
		users: [],
		loading: false,
		alert: null
	}
	/* 	UNCOMMENT THIS TO LOAD INITIAL RESULTS ON FIRST PAGE LOAD
  
  componentDidMount() {
		this.setState({ loading: true })
		axios
			.get(
				`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then(response => {
				this.setState({
					users: response.data,
					loading: false
				})
			})
			.catch(error => console.log(error))
  } */
	userSearch = async text => {
		// THIS TEXT IS RECEIVED FROM THE SEARCH COMPONENT AND PASSED UP THROUGH this.props.userSearch
		this.setState({ users: [], loading: true })
		await axios
			.get(
				`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then(response => {
				this.setState({ users: response.data.items, loading: false })
			})
			.catch(error => console.log(error))
	}

	clearUsers = () => this.setState({ loading: false, users: [] })

	setAlert = (message, type) => {
		this.setState({ alert: { message, type } })
		// MESSAGE IS REMOVED AFTER 4 SECONDS
		setTimeout(() => {
			this.setState({ alert: null })
		}, 4000)
	}

	render() {
		return (
			<React.Fragment>
				<Navbar />
				{/*VIEW STYLE GUIDE WITH <StyleGuide />*/}
				<Alert alert={this.state.alert} />
				<Search
					clearUsers={this.clearUsers}
					userSearch={this.userSearch}
					setAlert={this.setAlert}
				/>
				<UserGrid loading={this.state.loading} users={this.state.users} />
			</React.Fragment>
		)
	}
}

export default App
