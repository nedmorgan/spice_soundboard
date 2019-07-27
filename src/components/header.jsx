import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  .top-border {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: red;
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-family: sans-serif;
    margin-top: 1vw;
  }

  h1 {
    margin: 0;
    font-size: 1em;
    padding: 0.5em;
  }

  .nav-container {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1rem 0px;
    display: flex;
    justify-content: space-around;
    padding: 0.5em;
  }

  .nav-link {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.95);
    box-shadow: none;
    padding: 0.5em;
  }

  .nav-link:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 0.28rem;
  }
`

const doesNothing = e => {
  e.preventDefault()
  alert(
    'This link does nothing! Make sure your volume is up to try the other links!'
  )
}

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <div className="top-border">
          <h1>Prod Spice Soundboard</h1>
        </div>
        <div className="nav-container">
          <a className="nav-link" onClick={e => doesNothing(e)}>
            Data Systems
          </a>
          <a
            className="nav-link"
            rel="noopener noreferrer"
            href="https://www.rickrolled.com/get-rolled"
            target="_blank">
            Data Types
          </a>
          <a className="nav-link" onClick={e => doesNothing(e)}>
            Data Sources
          </a>
          <a className="nav-link" onClick={e => doesNothing(e)}>
            Integrations
          </a>
          <a className="nav-link" onClick={e => doesNothing(e)}>
            Endpoints
          </a>
        </div>
      </HeaderContainer>
    )
  }
}
