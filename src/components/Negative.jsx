import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations'

const fadeUp = keyframes`${fadeInUp}`

const NegativeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  animation: 0.9s ${fadeUp};

  .main-container {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1rem 0px;
    height: 100%;
    width: 100%;
    padding: 1em;
    margin: 0.7em;
  }

  .dark-mode-container {
    box-shadow: rgba(235, 235, 235, 0.1) 0px 0px 1rem 0px;
    height: 100%;
    width: 100%;
    padding: 1em;
    margin: 0.7em;
  }

  .main-content {
    width: 100%;
    font-size: 1em;
    transition: font-size 0.5s ease;
    font-weight: bold;
  }

  .dark-mode-content {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1em;
    transition: font-size 0.5s ease;
    font-weight: bold;
  }

  .dark-mode-content:hover {
    cursor: pointer;
    font-size: 1.5em;
    color: #0085ca;
  }

  .main-content:hover {
    cursor: pointer;
    font-size: 1.5em;
    color: #0085ca;
  }
`

export default class Negative extends Component {
  render() {
    return (
      <NegativeContainer>
        <div
          className={
            this.props.isDarkMode ? `dark-mode-container` : `main-container`
          }>
          <div
            onClick={e => this.props.negativeSounds(e, this.props.negSounds)}
            className={
              this.props.isDarkMode ? `dark-mode-content` : `main-content`
            }>
            Can't get Spicy. Gonna be a rough one...
          </div>
        </div>
      </NegativeContainer>
    )
  }
}
