import React, { Component } from 'react'
import styled from 'styled-components'

const DRButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  margin-bottom: 2em;

  button {
    border-radius: 5px;
    background-color: #0085ca;
    color: whitesmoke;
    padding: 0.5em 1em;
    font-weight: bold;
    opacity: 1;
    transition: 0.3s;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export default class DRButton extends Component {
  render() {
    return (
      <DRButtonContainer>
        <button>DR Mode</button>
      </DRButtonContainer>
    )
  }
}
