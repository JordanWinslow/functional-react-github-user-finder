import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/layout/Navbar"
import Alert from "./components/layout/Alert"
import UserDetails from "./components/users/UserDetails"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import NotFound from "./components/pages/404"
// import StyleGuide from "./components/StyleGuide"
import GithubState from "./context/github/GithubState"
import AlertState from "./context/alert/AlertState"

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          {/*VIEW STYLE GUIDE WITH <StyleGuide />*/}
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={UserDetails} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App
