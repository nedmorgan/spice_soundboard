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

  h1,
  h6 {
    margin: 0;
  }

  h1 {
    font-size: 1em;
    padding: 0.2em;
  }

  h6 {
    font-size: 0.5em;
    padding: 0.2em;
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

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <div className="top-border">
          <h1>Production SPICE Emotional Support Application (PSESA)</h1>
          <h6>
            (Be sure to have your volume on to have a full emotional support
            experience)
          </h6>
        </div>
        <div className="nav-container">
          <a
            className="nav-link"
            rel="noopener noreferrer"
            href="https://people.com/pets/most-popular-cat-videos-on-the-internet/"
            target="_blank">
            Cat Videos
          </a>
          <a
            className="nav-link"
            rel="noopener noreferrer"
            href="https://www.rickrolled.com/get-rolled"
            target="_blank">
            Mystery
          </a>
          <a
            className="nav-link"
            rel="noopener noreferrer"
            href="https://codeburst.io/i-want-to-learn-programming-but-i-dont-know-where-to-start-80dd2d55e1fd"
            target="_blank">
            Advanced Learning
          </a>
          <a
            className="nav-link"
            rel="noopener noreferrer"
            href={`https://www.boredpanda.com/unusual-animal-friendships-interspecies/?utm_source=google&utm_medium=organic&utm_campaign=organic`}
            target="_blank">
            New Friends
          </a>
          <a
            className="nav-link"
            rel="noopener noreferrer"
            href="https://www.vox.com/2015/4/30/11562024/too-embarrassed-to-ask-what-is-the-cloud-and-how-does-it-work"
            target="_blank">
            Resources
          </a>
        </div>
      </HeaderContainer>
    )
  }
}
