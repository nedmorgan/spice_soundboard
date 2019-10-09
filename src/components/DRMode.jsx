import React, { Component } from 'react'
import styled from 'styled-components'
import { strict } from 'assert'

const DRModeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    font-size: 20vw;
  }
`

export default class DRMode extends Component {
  componentDidMount() {
    let timer = this.props.activateDRMode
    if (this.props.DRCountdown === 0) {
      clearInterval(timer)
    } else {
      setInterval(timer, 1000)
    }
  }
  render() {
    return (
      <DRModeContainer>
        <h1>{`${String(this.props.DRCountdown)}...`}</h1>
      </DRModeContainer>
    )
  }
}
