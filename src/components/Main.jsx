import React, { Component } from 'react'
import Header from './Header'
import Positive from './Positive'
import Negative from './Negative'
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

export default class Main extends Component {
  state = {
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

  playSound = (e, arr) => {
    e.preventDefault()
    let randomSong = Math.floor(Math.random() * arr.length)
    const audio = new Audio(arr[randomSong])
    audio.play()
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Use PSESA's words to express your feelings...</h1>
        <Positive
          posSounds={this.state.posSounds}
          positiveSounds={this.playSound}
        />
        <Negative
          negSounds={this.state.negSounds}
          negativeSounds={this.playSound}
        />
      </div>
    )
  }
}
