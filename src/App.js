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
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/*VIEW STYLE GUIDE WITH <StyleGuide />*/}
        <Search />
        <UserGrid loading={this.state.loading} users={this.state.users} />
      </React.Fragment>
    )
  }
}

export default App
