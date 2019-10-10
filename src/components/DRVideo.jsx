import React, { Component } from 'react'
import { Player } from 'video-react'
import '../../node_modules/video-react/dist/video-react.css'
import styled from 'styled-components'

const VideoContainer = styled.div`
  margin-top: 4vh;
`

class App extends Component {
  render() {
    return (
      <VideoContainer>
        <Player
          autoPlay
          poster="/assets/poster.png"
          src="https://www.youtube.com/watch?v=Eujwxh_r43E"
          fluid={false}
          width={640}
          height={480}
        />
        <div>
          <button onClick={this.props.resetCountdownAndDRMode}>
            DR Complete
          </button>
        </div>
      </VideoContainer>
    )
  }
}

export default App
