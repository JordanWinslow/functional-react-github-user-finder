import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ItemBox = styled.div`
  margin: 20px 10vw;
  padding: 20px 15vw;
  border: 4px dotted rgba(255, 100, 21, 1);
  background: #10bd84;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, .7);
  cursor: pointer;
  transition: 0.3s ease-in;
  p {
    font-size: 22px;
    text-align: center;
  }
  :hover {
    transform: translateY(-4px);
    background: #005237;
  }
`

const RepoItem = ({ repo }) => {
  return (
    <a href={repo.html_url} style={{ color: "white" }}>
      <ItemBox>
        <p>{repo.name}</p>
      </ItemBox>
    </a>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}
export default RepoItem
