import React from "react"
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

class App extends React.Component {
  state = {
    users: [],
    userDetails: {}, // on clicking detail button, loads current user's info
    userRepos: [],
    clearUsersButton: false, // clear button displays on true
    loading: false, // animated loading icon displays on true
    alert: null // alert displays {message: "message", type: "type"}
  }

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
      .catch(error => this.setAlert(error, "danger")) // report GitHub Server Error to Top of User Screen if Any
    this.setState({ clearUsersButton: true })
  }

  clearUsers = () => this.setState({ loading: false, users: [] })

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } })
    // MESSAGE IS REMOVED AFTER 4 SECONDS
    setTimeout(() => {
      this.setState({ alert: null })
    }, 4000)
  }

  getUserDetails = async username => {
    this.setState({ loading: true })

    await axios
      .get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then(response => {
        this.setState({ userDetails: response.data, loading: false })
      })
      .catch(error => this.setAlert(error, "danger")) // report GitHub Server Error to Top of User Screen if Any
  }

  getUserRepos = async username => {
    this.setState({ loading: true })

    await axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then(response => {
        this.setState({ userRepos: response.data, loading: false })
      })
      .catch(error => this.setAlert(error, "danger")) // report GitHub Server Error to Top of User Screen if Any
  }

  render() {
    return (
      <Router>
        <Navbar />
        {/*VIEW STYLE GUIDE WITH <StyleGuide />*/}
        <Alert alert={this.state.alert} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Search
                  clearUsers={this.clearUsers}
                  clearUsersButton={this.state.clearUsersButton}
                  userSearch={this.userSearch}
                  setAlert={this.setAlert}
                />
                <UserGrid
                  loading={this.state.loading}
                  users={this.state.users}
                />
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
                getUserDetails={this.getUserDetails}
                userDetails={this.state.userDetails}
                getUserRepos={this.getUserRepos}
                userRepos={this.state.userRepos}
                loading={this.state.loading}
              />
            )}
          />
        </Switch>
      </Router>
    )
  }
}

export default App
