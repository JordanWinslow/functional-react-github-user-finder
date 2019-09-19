import React, { Fragment } from "react"
import Search from "../users/Search"
import UserGrid from "../users/UserGrid"

const Home = () => (
	<Fragment>
		<Search />
		<UserGrid />
	</Fragment>
)

export default Home
