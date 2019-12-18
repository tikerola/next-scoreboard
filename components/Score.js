
const Score = ({ name, points, left = true }) => (
  <React.Fragment>
    {left ?
      <div className="score-container">
        <span className="score-name">{name}</span>
        <span className="score-number">{points}</span>
      </div>
      :
      <div className="score-container">
        <span className="score-number">{points}</span>
        <span className="score-name">{name}</span>
      </div>

    }


    <style jsx>{`
    .score-container {
      width: 35%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
    }

    .score-name {
      font-size: 1em;
      padding: 0.5em;
      color: #bbb;
    }

    .score-number {
      font-size: 2.5em;
      padding: 0.5em;
      font-weight: bold;
      color: white;
    }
  `}</style>
  </React.Fragment>

)

export default Score