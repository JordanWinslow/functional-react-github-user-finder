import React from "react"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import UserGrid from "./components/users/UserGrid"
import axios from "axios"
import Search from "./components/users/Search"
// import StyleGuide from "./components/StyleGuide"

class App extends React.Component {
	state = {
		users: [],
		loading: false
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
	}
	clearUsers = () => this.setState({ users: [], loading: false })

	render() {
		return (
			<React.Fragment>
				<Navbar />
				{/*VIEW STYLE GUIDE WITH <StyleGuide />*/}
				<Search userSearch={this.userSearch} clearUsers={this.clearUsers} />
				<UserGrid loading={this.state.loading} users={this.state.users} />
			</React.Fragment>
		)
	}
}

export default App
