import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Alert from "./components/layout/Alert"
import Search from "./components/users/Search"
import UserDetails from "./components/users/UserDetails"
import UserGrid from "./components/users/UserGrid"
import About from "./components/pages/About"
// import StyleGuide from "./components/StyleGuide"
import GithubState from "./context/github/GithubState"
import AlertState from "./context/alert/AlertState"
import ThemeProvider from "./context/theme/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <GithubState>
        <AlertState>
          <Router>
            <Navbar />
            {/*VIEW STYLE GUIDE WITH <StyleGuide />*/}
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <Search />
                    <UserGrid />
                  </React.Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={UserDetails} />
            </Switch>
          </Router>
        </AlertState>
      </GithubState>
    </ThemeProvider>
  )
}

export default App
