import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations'

const fadeUp = keyframes`${fadeInUp}`

const NegativeContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1rem 0px;
  display: flex;
  justify-content: flex-start;
  padding: 1em;
  margin: 0.7em;
  animation: 0.9s ${fadeUp};

  .main-content {
    width: 100%;
    font-size: 1em;
    transition: font-size 0.5s ease;
    font-weight: bold;
  }

  .main-content:hover {
    cursor: pointer;
  }

  .main-content:hover {
    font-size: 1.5em;
    color: #0085ca;
  }
`

export default class Negative extends Component {
  render() {
    return (
      <NegativeContainer>
        <div
          onClick={e => this.props.negativeSounds(e, this.props.negSounds)}
          className="main-content">
          The SPICE has stopped!
        </div>
      </NegativeContainer>
    )
  }
}
