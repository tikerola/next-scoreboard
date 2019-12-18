
import Score from './Score'

const Results = () => {

  return <div className="results-outer-container">
    
    <div className="results-inner-container">
      <Score name="Roger Federer" points="5" />
      <span className="results-dash">-</span>
      <Score name="Lionel Messi" points="7" left={false} />
    </div>

    {/* <img src="/static/images/tennis.png" className="image" alt="player" /> */}

    <style jsx>{`

      .results-outer-container {
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        // background-image: url('/static/images/sportsbg.jpg');
        // background-size: 100% 100%;
      }

      .results-inner-container {
        width: 75%;
        margin: 2em auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        -webkit-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 2px 3px 5px 0px rgba(255,255,255,0.75);
      }

      .results-dash {
        font-size: 3em;
        display: flex;
        align-items: center;
        color: white;
      }

      .image {
        width: 8em;
        height: auto;
      }

    `}</style>
  </div>
}

export default Results