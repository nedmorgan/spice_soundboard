import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const VideoContainer = styled.div`
  margin-top: 4vh;

  .dr-button-div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1em;
  }

  button {
    border-radius: 5px;
    background-color: #f40000;
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

class App extends Component {
  render() {
    return (
      <VideoContainer>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=8hwAjZlA4TY"
          playing
          height={480}
          width={640}
        />
        <div className={`dr-button-div`}>
          <button onClick={this.props.resetCountdownAndDRMode}>
            DR Complete
          </button>
        </div>
      </VideoContainer>
    )
  }
}

export default App
