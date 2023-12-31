import './index.css'

const GameResultsView = props => {
  const {choicesList, isShow, checkResult, newList, text, restartGame} = props
  const showGame = () => (
    <div className="game-container">
      {isShow && (
        <>
          <button
            className="game-button"
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <img
              className="game-image"
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </button>

          <button
            className="game-button"
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <img
              className="game-image"
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </button>

          <button
            className="game-button"
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <img
              className="game-image"
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </button>
        </>
      )}

      {!isShow && (
        <>
          <div className="result-container">
            <p className="text">YOU</p>
            <img
              className="game-image"
              src={newList[0].imageUrl}
              alt="your choice"
            />
          </div>
          <div className="result-container">
            <p className="text">OPPONENT</p>
            <img
              className="game-image"
              src={newList[1].imageUrl}
              alt="opponent choice"
            />
          </div>
          <div className="result-container">
            <p className="result-text">{text}</p>
            <button
              className="play-again-button"
              type="button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </button>
          </div>
        </>
      )}
    </div>
  )

  return showGame()
}

export default GameResultsView
