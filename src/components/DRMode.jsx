import React, { Component } from 'react'
import styled from 'styled-components'
import DRVideo from './DRVideo'

const DRModeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    font-size: 20vw;
  }

  .dark-font {
    color: black;
  }

  .white-font {
    color: whitesmoke;
  }
`

export default class DRMode extends Component {
  render() {
    return (
      <DRModeContainer>
        {this.props.videoMode ? (
          <DRVideo
            resetCountdownAndDRMode={this.props.resetCountdownAndDRMode}
          />
        ) : (
          <h1
            className={this.props.isDarkMode ? `white-font` : `dark-font`}
            id={`countdown-timer`}>{`${String(this.props.DRCountdown)}...`}</h1>
        )}
      </DRModeContainer>
    )
  }
}
