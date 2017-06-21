// CSS imports
import './css/main.scss';

if (window.location.search.match( /print-pdf/gi )) {
  require('./css/print.scss');
} else {
  require('./css/screen.scss');
}

// JS imports
import padLeft from 'left-pad'
import React from 'react'
import ReactDOM from 'react-dom'

import Hashes from 'jshashes'

Reveal.addEventListener( 'hashes', function() {
	// TODO: Sprinkle magic
  const SHA1 = new Hashes.SHA1

  const phrases = [
    'Hello world ',
    'Hello Israel',
    'Ari'
  ]
  const messages = phrases.reduce((sum, phrase) => {
    sum[phrase] = padLeft(SHA1.hex(phrase), 20, 's')
    return sum
  }, {})
  const Item = ({ k, value }) => (<tr><td>{k}</td><td colSpan="18">{value}</td></tr>)
  ReactDOM.render(
    <table className="table"><tbody>
      {Object.keys(messages).map(key => (
        <Item key={key} k={key} value={messages[key]} />
      ))}
    </tbody></table>,
    document.querySelector("#output")
  )
}, false );


import './js/config.js';
import './js/app.js';
