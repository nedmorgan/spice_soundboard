import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations'
import song from '../media/airball.mp3'

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
  playSound = e => {
    e.preventDefault()
    // let randomSong = Math.floor(Math.random() * arr.length)
    const audio = new Audio(song)
    audio.play()
    console.log('Hello')
  }
  render() {
    return (
      <PositiveContainer>
        <div
          onClick={e => this.playSound(e, this.props.posSounds)}
          className="main-content">
          Positive
        </div>
      </PositiveContainer>
    )
  }
}
