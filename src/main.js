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
import objectHash from 'object-hash'

Reveal.addEventListener( 'hashes', function() {
	// TODO: Sprinkle magic
  const SHA1 = new Hashes.SHA1

  class HashInput extends React.Component {
    constructor(props) {
      super(props)

      const input = 'hello world'
      this.state = {
        input,
        hash: SHA1.hex(input)
      }
    }

    onChange(evt) {
      const input = evt.target.value
      this.setState({
        input,
        hash: SHA1.hex(input)
      })
    }

    render() {
      return (
        <div className="hashes">
          <input value={this.state.input} className="input" type="text" onChange={this.onChange.bind(this)} />
          <span>{this.state.hash}</span>
        </div>
      )
    }
  }

  ReactDOM.render(
    <HashInput />,
    document.querySelector("#output")
  )
}, false );

Reveal.addEventListener('miner', function() {
  console.log('yay')

  function detect(hash, difficulty) {
    for (var i = 0, b = hash.length; i < b; i ++) {
        if (hash[i] !== '0') {
            break;
        }
    }
    return i === difficulty;
  }
})


import './js/app.js';
