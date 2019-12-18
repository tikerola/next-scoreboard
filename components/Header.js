
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = ({ title }) => {
  
  const router = useRouter()
  
  return (
  <div className="header-container">
    <h1 className="header-title">{title}</h1>
    <div className="header-navigation">
      <Link href="/"><a style={ router.pathname === '/' ? { color: 'white'} : {}}>Game Results</a></Link>
      <Link href="/HighScores"><a style={ router.pathname === '/HighScores' ? { color: 'white' } : {}}>High Scores</a></Link>
      <Link href="/CreatePlayer"><a style={ router.pathname === '/CreatePlayer' ? { color: 'white' } : {}}>Create a Player</a></Link>

    </div>


    <style jsx>{`
      .header-container {
        width: 100%;
        height: 20%;
        margin: 0 auto;
        background: #1e1e1e;
        display: flex;
        flex-direction: column;
      }

      .header-title {
        text-align: left;
        margin: 0;
        color: #5e5e5e;
        margin-left: 5%;
        padding: .5em;
        
      }

      .header-navigation {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        color: white; 
      }

      .header-navigation a {
        color: #bbb;
        text-decoration: none;
        font-size: 1em;
      }
      
      .active-link {
        text-decoration: underline;
      }

    `}</style>
  </div>
)}

export default Header