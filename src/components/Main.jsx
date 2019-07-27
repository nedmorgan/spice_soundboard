import React, { Component } from 'react'
import Header from './Header'
import Positive from './Positive'
import Negative from './Negative'

export default class Main extends Component {
  state = {
    posSounds: [
      'airmail.mp3',
      'alley-oop.mp3',
      'banana.mp3',
      'big-papa.mp3',
      'blast.mp3',
      'cool.mp3',
      'dont-start.mp3',
      'drops-it.mp3',
      'excuse-me.mp3',
      'finger-roll.mp3',
      'give-boom.mp3',
      'heating-2.mp3',
      'here-comes.mp3',
      'its-good.mp3',
      'kaboom.mp3',
      'king-james.mp3',
      'knows.mp3',
      'long-range.mp3',
      'love-it.mp3',
      'on-fire.mp3',
      'papa-2.mp3',
      'party.mp3',
      'puts-boom.mp3',
      'too-easy.mp3',
      'waffle-house.mp3',
      'yes.mp3',
      'boom-2.mp3'
    ],
    negSounds: [
      'airball.mp3',
      'blow-over.mp3',
      'boards.mp3',
      'butterfingers.mp3',
      'cares.mp3',
      'embarassing.mp3',
      'empty.mp3',
      'get-out.mp3',
      'goaltending.mp3',
      'hole.mp3',
      'jokin.mp3',
      'mud-pie.mp3',
      'no-good.mp3',
      'no-mans-land.mp3',
      'no-surprise.mp3',
      'not-tonight.mp3',
      'ouch.mp3',
      'rejected.mp3',
      'shootin.mp3',
      'think.mp3',
      'too-far.mp3',
      'ut-oh.mp3'
    ]
  }

  render() {
    return (
      <div>
        <Header />
        <Positive posSounds={this.state.posSounds} />
        <Negative negSounds={this.state.negSounds} />
      </div>
    )
  }
}
