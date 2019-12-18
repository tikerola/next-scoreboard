
import Layout from '../components/Layout'
import React, { useState } from 'react'
import playerScores from '../utils/data'
import ErrorMessage from '../components/ErrorMessage'
import { withRouter } from 'next/router'


const CreatePlayer = ( props ) => {
  const [name, setName] = useState('')
  const [points, setPoints] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {

    if (!validated()) {
      setTimeout(() => {
        setMessage('')
      }, 5000)

      return
    }

    playerScores[name] = {
      name,
      points: +points
    }

    props.router.push('/HighScores')
  }

  const validated = () => {
    if (!name || !points) {
      setMessage('You failed to give all necessary info')
      return false
    }

    if (/[^0-9]/.test(points)) {
      setMessage('Points must be an integer')
      return false
    }

    if (playerScores[name]) {
      setMessage('Player must be unique')
      return false
    }

    return true
  }

  return <Layout title="Create a Player">
    <div className="create-page">
      
      <div className="create-container">
      {message && <ErrorMessage message={message} />}
        <div className="input-container">
          <label className="label">Name:</label>
          <input className="input" onChange={e => setName(e.target.value)} />
        </div>

        <div className="input-container">
          <label className="label">Points:</label>
          <input className="input" onChange={e => setPoints(e.target.value)} />
        </div>

        <div className="button" onClick={handleSubmit}>
          Submit
      </div>
      </div>
    </div>
    <style jsx>{`
      .create-page {
        text-align: center;
        color: #bbb;
        height: 70%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        margin: 0 auto;
        
      }

      .create-container {
        width: 50%;
        padding-top: 5em;
        padding-right: 3em;
      }

      .input-container {
        width: 19em;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
        padding: 1em;
        text-align: left;
        
      }

      .label {
        display: inline-block;
        width: 120px;
        border: 1px solid black;
        border-color: #bbb;
        padding-top: 0.3em;
        padding-left: 0.5em;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        
        color: #bbb;
      }

      .input {
        width: 200px;
        border-style: none;
        border-bottom: 1px solid #bbb;
        background: inherit;
        color: #bbb;
        font-size: 1em;
        padding-left: 1em;
      }

      .input :focus {
        outline: none;
      }

      .button {
        width: 6em;
        padding: 0.2em;
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        background: #333;
        color: white;
        border-radius: 5em;
      }

      .button :hover {
        transform: scale(1.1);
      }
    
    `}

    </style>
  </Layout>

}


export default withRouter(CreatePlayer)