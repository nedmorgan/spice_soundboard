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
  }

  .main-content:hover {
    cursor: pointer;
  }
`

export default class Negative extends Component {
  render() {
    return (
      <NegativeContainer>
        <div className="main-content">Negative</div>
      </NegativeContainer>
    )
  }
}
