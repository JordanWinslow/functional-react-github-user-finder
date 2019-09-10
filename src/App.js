import React from "react"
import "./App.css"
import StyleGuide from "./components/StyleGuide"
import Navbar from "./components/layout/Navbar"
import UserGrid from "./components/users/UserGrid"
import axios from "axios"

class App extends React.Component {
	state = {
		users: [],
		loading: false
	}
	async componentDidMount() {
		this.setState({ loading: true })
		const response = await axios.get("https://api.github.com/users")
		this.setState({
			users: response.data,
			loading: false
		})
	}
	render() {
		return (
			<React.Fragment>
				<Navbar />
				{/*VIEW STYLE GUIDE WITH <StyleGuide />*/}
				<UserGrid users={this.state.users} />
			</React.Fragment>
		)
	}
}

export default App
