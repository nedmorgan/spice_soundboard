import React, { Component } from 'react'
import Header from './Header'
import Positive from './Positive'
import Negative from './Negative'
import DarkModeButton from './DarkModeButton'
import DRButton from './DRButton'
import DRMode from './DRMode'
import airball from '../media/airball.mp3'
import dontStart from '../media/dont-start.mp3'
import excuseMe from '../media/excuse-me.mp3'
import airmail from '../media/airmail.mp3'
import alleyOop from '../media/alley-oop.mp3'
import banana from '../media/banana.mp3'
import bigPapa from '../media/big-papa.mp3'
import blast from '../media/blast.mp3'
import cool from '../media/cool.mp3'
import fingerRoll from '../media/finger-roll.mp3'
import giveBoom from '../media/give-boom.mp3'
import blowOver from '../media/blow-over.mp3'
import boards from '../media/boards.mp3'
import butterfingers from '../media/butterfingers.mp3'
import cares from '../media/cares.mp3'
import embarassing from '../media/embarassing.mp3'
import empty from '../media/empty.mp3'
import getOut from '../media/get-out.mp3'
import heating2 from '../media/heating-2.mp3'
import hereComes from '../media/here-comes.mp3'
import hole from '../media/hole.mp3'
import itsGood from '../media/its-good.mp3'
import jokin from '../media/jokin.mp3'
import kaboom from '../media/kaboom.mp3'
import kingJames from '../media/king-james.mp3'
import knows from '../media/knows.mp3'
import longRange from '../media/long-range.mp3'
import loveIt from '../media/love-it.mp3'
import mudPie from '../media/mud-pie.mp3'
import noGood from '../media/no-good.mp3'
import noMansLand from '../media/no-mans-land.mp3'
import noSurprise from '../media/no-surprise.mp3'
import notTonight from '../media/not-tonight.mp3'
import onFire from '../media/on-fire.mp3'
import ouch from '../media/get-out.mp3'
import papa2 from '../media/papa-2.mp3'
import party from '../media/party.mp3'
import putBoom from '../media/puts-boom.mp3'
import rejected from '../media/rejected.mp3'
import think from '../media/think.mp3'
import tooEasy from '../media/too-easy.mp3'
import tooFar from '../media/too-far.mp3'
import utOh from '../media/ut-oh.mp3'
import waffleHouse from '../media/waffle-house.mp3'
import yes from '../media/yes.mp3'
import styled from 'styled-components'

const MainContainer = styled.div`
  min-height: 100%;
  .dark-mode-title {
    color: rgba(255, 255, 255, 0.9);
  }

  .normal-title {
    color: black;
  }

  .header-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  h5 {
    bottom: 0;
    left: 0;
    position: absolute;
    margin: 0;
  }

  .white-version-text {
    color: whitesmoke;
  }

  .dark-version-text {
    color: black;
  }

  @media (max-width: 768px) {
    .header-div {
      flex-direction: column;
    }
    h1 {
      text-align: center;
    }
  }
`

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.activateDRMode = this.activateDRMode.bind(this)
    this.state = {
      isDarkMode: false,
      isMainMode: true,
      DRCountdown: 5,
      videoMode: false,
      posSounds: [
        airmail,
        alleyOop,
        banana,
        bigPapa,
        blast,
        cool,
        fingerRoll,
        giveBoom,
        hereComes,
        heating2,
        itsGood,
        kaboom,
        kingJames,
        knows,
        longRange,
        loveIt,
        onFire,
        papa2,
        party,
        putBoom,
        tooEasy,
        yes,
        noMansLand,
        hole,
        waffleHouse
      ],
      negSounds: [
        airball,
        dontStart,
        excuseMe,
        blowOver,
        boards,
        butterfingers,
        cares,
        embarassing,
        empty,
        getOut,
        jokin,
        mudPie,
        noGood,
        notTonight,
        noSurprise,
        ouch,
        rejected,
        think,
        tooFar,
        utOh
      ]
    }
  }

  playSound = (e, arr) => {
    e.preventDefault()
    let randomSong = Math.floor(Math.random() * arr.length)
    const audio = new Audio(arr[randomSong])
    audio.play()
  }

  toggleDarkMode = () => {
    let isDarkMode = this.state.isDarkMode
    if (isDarkMode === false) {
      this.setState({ isDarkMode: true })
      document.body.setAttribute('style', 'background-color: black;')
    } else {
      this.setState({ isDarkMode: false })
      document.body.setAttribute('style', 'background-color: white;')
    }
  }

  activateDRMode = () => {
    this.setState({ isMainMode: false })
    const timer = setInterval(() => {
      if (this.state.DRCountdown > 0) {
        this.setState({ DRCountdown: this.state.DRCountdown - 1 })
      } else {
        this.setState({ videoMode: true })
        return () => clearInterval(timer)
      }
    }, 1000)
  }

  resetCountdownAndDRMode = () => {
    this.setState({ DRCountdown: 5, videoMode: false, isMainMode: true })
  }

  render() {
    return (
      <MainContainer>
        {this.state.isMainMode ? (
          <div>
            <Header isDarkMode={this.state.isDarkMode} />
            <div className={`header-div`}>
              <h1
                className={
                  this.state.isDarkMode ? `dark-mode-title` : `normal-title`
                }>
                Use PSESA's words to express your feelings...
              </h1>
              <DarkModeButton
                toggleDarkMode={this.toggleDarkMode}
                isDarkMode={this.state.isDarkMode}
              />
            </div>
            <Positive
              posSounds={this.state.posSounds}
              positiveSounds={this.playSound}
              isDarkMode={this.state.isDarkMode}
            />
            <Negative
              negSounds={this.state.negSounds}
              negativeSounds={this.playSound}
              isDarkMode={this.state.isDarkMode}
            />
            <DRButton activateDRMode={this.activateDRMode} />
          </div>
        ) : (
          <DRMode
            DRCountdown={this.state.DRCountdown}
            resetCountdownAndDRMode={this.resetCountdownAndDRMode}
            activateDRMode={this.activateDRMode}
            videoMode={this.state.videoMode}
            isDarkMode={this.state.isDarkMode}
          />
        )}
        <h5
          className={
            this.state.isDarkMode ? `white-version-text` : `dark-version-text`
          }>
          v.1.5.167
        </h5>
      </MainContainer>
    )
  }
}
