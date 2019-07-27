import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations'

const fadeUp = keyframes`${fadeInUp}`

const PositiveContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1rem 0px;
  display: flex;
  justify-content: flex-start;
  padding: 1em;
  margin: 0.7em;
  animation: 0.6s ${fadeUp};

  .main-content {
    width: 100%;
  }

  .main-content:hover {
    cursor: pointer;
  }
`

export default class Positive extends Component {
  render() {
    return (
      <PositiveContainer>
        <div
          onClick={e => this.props.positiveSounds(e, this.props.posSounds)}
          className="main-content">
          Positive
        </div>
      </PositiveContainer>
    )
  }
}
