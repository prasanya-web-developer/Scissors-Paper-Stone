import './index.css'

const ScoreView = props => {
  const {score} = props
  return (
    <div className="score-container">
      <div className="name-container">
        <h1 className="item-name">
          ROCK <br /> PAPER <br /> SCISSORS
        </h1>
      </div>
      <div className="score-card">
        <p className="score-heading">Score</p>
        <p className="result-score-text">{score}</p>
      </div>
    </div>
  )
}

export default ScoreView
