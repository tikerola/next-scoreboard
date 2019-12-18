
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children, title }) => {

  return <div className="main-background">
    <Head>
      <title>Scoreboard</title>
    </Head>
    <div className="main-container">
      <div className="layout-container">

        <Header title="Scoreboard Service" />
        {children}
        <Footer />


      </div>
    </div>
    <style jsx>{`

      .main-background {
        width: 100vw;
        height: 100vh;
        
        background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
        padding-top: 5%;
      }
      .main-container {
        width: 60%;
        height: 70vh;
        margin: 0 auto;
        -webkit-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
        background: #5e5e5e;
      }
      .layout-container {
        width: 100%;
        height: 100%;
        position: relative;
        background-image: url('/static/images/sportsbg.jpg');
        background-size: 100% 100%;
      }
      
    `}</style>
  </div>
}

export default Layout