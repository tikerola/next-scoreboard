
import Layout from '../components/Layout'
import playerPoints from '../utils/data'
import React, { useState } from 'react'

const HighScores = () => {
  const [order, setOrder] = useState('desc')

  const mapObjToArray = data => {
    let arr = []
    for (let key in data) {
      arr.push(data[key])
    }
    if (order === 'desc')
      return arr.sort((a, b) => b.points - a.points)

    else
      return arr.sort((a, b) => a.points - b.points)
  }

  return <Layout title="High Scores">
    <div className="background-container">
      <div className="highscore-container" >

        <div className="list-container">
          {/* <img src="/static/images/football.png" className="image" alt="football" /> */}
          <ul className="highscore-list">
            <li className="highscore-list-item">
              <span style={order === 'asc' ? { transform: 'scale(1.2)' } : {}}
                onClick={() => setOrder('asc')}
              >🡅</span>
              <span style={order === 'desc' ? { transform: 'scale(1.2)' } : {}}
                onClick={() => setOrder('desc')}
              >🡇</span>
            </li>

            {mapObjToArray(playerPoints).map((player, i) => <li
              key={player.name}><span className="highscore-order-number">{i + 1}.</span>
              <span className="highscore-name">{player.name}</span>
              <span style={{ color: 'white' }}> {player.points}</span>
            </li>)}

          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`

      .background-container {
        width: 100%;
        height: 70%;
      }

      .highscore-container {
        color: #aaa;
        height: 70%;
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Nanum Gothic Coding', monospace;
        margin-left: auto;
        
      }

      .list-container {
        width: 100%;
        height: 80%;
        overflow: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        
      }

      .highscore-list {
        list-style-type: none;
        width: 55%;
        text-align: left;
        
        font-size: 1em;
        
      }
      .highscore-list-item {
        padding-bottom: 0.5rem;
        display: flex; 
        width: 50px; 
        justify-content: space-between;
        cursor: pointer;
      }

      .highscore-order-number {
        display: inline-block;
        width: 2.5em;
      }

      .highscore-name {
        width: 12.5em; 
        display: inline-block;
      }

      .image {
        width: 8em;
        height: auto; 
      }

    `}</style>
  </Layout>

}


export default HighScores