import React from "react"
import "./App.css"
import StyleGuide from "./components/StyleGuide"
import Navbar from "./components/layout/Navbar"
import UserItem from "./components/users/UserItem"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/*VIEW STYLE GUIDE WITH <StyleGuide />*/}
        <UserItem />
      </React.Fragment>
    )
  }
}

export default App
