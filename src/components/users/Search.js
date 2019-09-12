import React, { Component } from "react"
import styled from "styled-components"

const FormContainer = styled.form`
  margin: 0 5vw;
  display: grid;
  grid-gap: 1rem;
`
const InputText = styled.input`
  font-family: "Karla", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  margin-top: 20px;
  padding: 0.5rem 0 0.5rem 10px;
  background: rgba(255, 255, 255, 0.9);
  color: #10bd84;
  ::placeholder {
    color: #10bd84;
  }
`
const SubmitButton = styled.input`
  font-family: "Karla", sans-serif;
  margin-bottom: 20px;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  letter-spacing: 1.2px;
  border: none;
  cursor: pointer;
  background: rgba(255, 100, 21, 1);
  color: #fff1e9;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  transition-duration: 0.2s;
  :hover {
    transform: translateY(-1px);
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
  }
`

class Search extends Component {
  state = {
    searchText: ""
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }) // e.target.name is the InputText name="searchText" and e.target.value is InputText value="this.state.searchText"
  } // we put [e.target.name] in brackets as an HTML selector to grab the name value from the input form
  onSubmit = searchText => {
    // THIS IS WHERE THE MAGIC HAPPENS
  }
  render() {
    return (
      <FormContainer onSubmit={this.onSubmit}>
        <InputText
          type="text"
          name="searchText"
          placeholder="Search Users..."
          value={this.state.searchText}
          onChange={this.onChange}
        />
        <SubmitButton type="submit" value="🔍Search" />
      </FormContainer>
    )
  }
}

export default Search
