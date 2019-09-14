import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import spinnerImage from "../layout/spinner.gif"

const Spinner = styled.img`
  width: 200px;
  display: block;
  margin: auto;
`

class UserDetails extends Component {
  componentDidMount() {
    this.props.getUserDetails(this.props.match.params.login) // "match.params" grabs the user name from the URL
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.userDetails // destructure the API returned object into keys/values

    const { loading } = this.props
    if (loading) return <Spinner src={spinnerImage} alt="Loading..." />
    return (
      <React.Fragment>
        <Link to="/">Back to Search</Link>
        <h1>{name}</h1>
        <img src={avatar_url} />
        Hireable: {hireable ? "✔️" : "❌"}
      </React.Fragment>
    )
  }
}

UserDetails.propTypes = {
  loading: PropTypes.bool.isRequired,
  userDetails: PropTypes.object.isRequired,
  getUserDetails: PropTypes.func.isRequired
}
export default UserDetails
