/* eslint-disable jsx-a11y/control-has-associated-label */

import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import GameResultsView from '../GameResultsView'
import ScoreView from '../ScoreView'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    newList: [choicesList[0], choicesList[1]],
    isShow: true,
    text: 'YOU WON',
    score: 0,
  }

  getResult = (you, me) => {
    if (you.id === 'ROCK') {
      switch (me.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (you.id === 'PAPER') {
      switch (me.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (me.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => this.setState({isShow: true})

  checkResult = id => {
    const {score} = this.state
    const choice1 = choicesList.filter(eachItem => eachItem.id === id)
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const result = this.getResult(choice1[0], choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      isShow: false,
      newList: [choice1[0], choice2],
      text: result,
      score: newScore,
    })
  }

  render() {
    const {score, isShow, text, newList} = this.state
    return (
      <div className="main-container">
        <ScoreView score={score} />

        <GameResultsView
          choicesList={choicesList}
          text={text}
          isShow={isShow}
          newList={newList}
          checkResult={this.checkResult}
          restartGame={this.restartGame}
        />
        <div className="rules-container">
          <Popup
            modal
            trigger={
              <button type="button" className="popup-button">
                RULES
              </button>
            }
          >
            {close => (
              <div className="popup-view">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <img
                  className="rules-img"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default Home
