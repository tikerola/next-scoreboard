
const ErrorMessage = ({message}) => {

  return <div className="message">
    {message}

    <style jsx>{`
      .message {
        width: 100%;
        color: red;
        font-size: 1em;
        font-weight: bold:
        
      }
    `}</style>
  </div>
}

export default ErrorMessage