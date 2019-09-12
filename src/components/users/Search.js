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
`
const SubmitButton = styled.input`
  font-family: "Karla", sans-serif;
  margin-bottom: 20px;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  letter-spacing: 1.2px;
  border: none;
  cursor: pointer;
  background: #333;
  color: #fff;
`

class Search extends Component {
  render() {
    return (
      <FormContainer>
        <InputText
          type="text"
          name="searchText"
          placeholder="Search Users..."
        />
        <SubmitButton type="submit" value="🔍Search" />
      </FormContainer>
    )
  }
}

export default Search
