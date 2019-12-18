
const Footer = ({ title }) => (
  <div className="footer-container">
    <div className="footer-text">© Timo Kerola {new Date().getFullYear()}</div>


    <style jsx>{`
      .footer-container {
        width: 100%;
        height: 10%;
        margin: 0 auto;
        background: #2e2e2e;
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
      }

      .footer-text {
        text-align: left;
        margin-left: 10%;
        padding: 1rem;
        color: #999;
        font-size: 0.8em;
      }
    `}</style>
  </div>
)

export default Footer