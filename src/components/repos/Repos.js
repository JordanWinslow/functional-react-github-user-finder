import React from "react"
import PropTypes from "prop-types"
import RepoItem from "./RepoItem"

const Repos = ({ repos }) => {
	return (
		<React.Fragment>
			<center>
				<h2>Repos:</h2>
			</center>
			{repos.map(repo => (
				<RepoItem repo={repo} key={repo.id} />
			))}
		</React.Fragment>
	)
}

Repos.propTypes = {
	repos: PropTypes.array.isRequired
}
export default Repos
