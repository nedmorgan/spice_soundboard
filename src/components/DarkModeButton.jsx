import React, { Component } from 'react'
import styled from 'styled-components'

const DarkModeContainer = styled.div`
  .button-normal {
    border-radius: 13px;
    color: rgba(0, 0, 0, 0.9);
    background-color: rgba(255, 255, 255, 0.05);
    padding: 0.6em;
  }

  .button-dark-mode {
    border-radius: 13px;
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.6em;
  }
`

export default class DarkModeButton extends Component {
  render() {
    return (
      <DarkModeContainer>
        <button
          className={
            this.props.isDarkMode ? `button-dark-mode` : `button-normal`
          }
          onClick={this.props.toggleDarkMode}>
          Dark Mode
        </button>
      </DarkModeContainer>
    )
  }
}
