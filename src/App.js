import React from "react"
import "./App.css"
import StyleGuide from "./components/StyleGuide"
import Navbar from "./components/layout/Navbar"

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
      <Navbar />
				{/*VIEW STYLE GUIDE WITH <StyleGuide />*/}
        <h1>Sup Dawg</h1>
			</React.Fragment>
		)
	}
}

export default App
