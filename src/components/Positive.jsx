import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations'
import song from '../media/airball.mp3'
import song2 from '../media/airmail.mp3'

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
  state = {
    songs: [song, song2]
  }

  playSound = e => {
    e.preventDefault()
    let randomSong = Math.floor(Math.random() * this.state.songs.length)
    console.log(randomSong)
    const audio = new Audio(this.state.songs[randomSong])
    audio.play()
    console.log('Hello')
  }
  render() {
    return (
      <PositiveContainer>
        <div onClick={e => this.playSound(e)} className="main-content">
          Positive
        </div>
      </PositiveContainer>
    )
  }
}
