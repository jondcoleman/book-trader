import React from 'react'

function handleImgError(e) {
  e.target.src = 'https://dl.dropboxusercontent.com/u/600747/BookTraderAssets/no-cover.gif'
}

const Trade = props => {
  const bookOffered = props.bookOffered
  const bookRequested = props.bookRequested

  function handleDelete() {
    props.deleteTrade(props._id)
  }

  function handleAccept() {
    props.acceptTrade(props._id)
    props.changePage('My')
  }

  function getButton(type) {
    if (type === 'my') {
      return <button className="button alert" onClick={handleDelete}>Delete Trade</button>
    } else if (type === 'other') {
      return <button className="button" onClick={handleAccept}>Accept Trade</button>
    }
    return null
  }

  return (
    <div className="trade-container">
      <div className="row">
        <div className="trade container small-4">
          <img
            onError={handleImgError}
            className="thumbnail book image"
            src={bookOffered.imageUrl}
            alt={bookOffered.title}
          />
        </div>

        <div className="trade-middle container small-4">
          <div>
            <div className="trade-icon container">
              <i className="trade-icon fa fa-exchange" aria-hidden="true"></i>
            </div>
            {getButton(props.type)}
          </div>
        </div>

        <div className="trade container small-4">
          <img
            onError={handleImgError}
            className="thumbnail book image"
            src={bookRequested.imageUrl}
            alt={bookRequested.title}
          />
        </div>
      </div>
      <div className="row">
        <div className="trade container small-4">
          <div className="book title">{bookOffered.title}</div>
        </div>

        <div className="trade-icon container small-4">
        </div>

        <div className="trade container small-4">
          <div className="book title">{bookRequested.title}</div>
        </div>
      </div>
    </div>
  )
}

Trade.propTypes = {
  type: React.PropTypes.string,
  bookOffered: React.PropTypes.object,
  bookRequested: React.PropTypes.object
}

export default Trade
