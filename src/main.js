// CSS imports
import './css/main.scss';

if (window.location.search.match(/print-pdf/gi)) {
  require('./css/print.scss');
} else {
  require('./css/screen.scss');
}

// JS imports
import padLeft from 'left-pad';
import React from 'react';
import ReactDOM from 'react-dom';

import Hashes from 'jshashes';

const SHA1 = new Hashes.SHA1();

Reveal.addEventListener(
  'hashes',
  function() {
    class HashInput extends React.Component {
      constructor(props) {
        super(props);

        const input = 'hello world';
        this.state = {
          input,
          hash: SHA1.hex(input)
        };
      }

      onChange(evt) {
        const input = evt.target.value;
        this.setState({
          input,
          hash: SHA1.hex(input)
        });
      }

      render() {
        return (
          <div className="hashes">
            <input
              value={this.state.input}
              className="input"
              type="text"
              onChange={this.onChange.bind(this)}
            />
            <span>{this.state.hash}</span>
          </div>
        );
      }
    }

    ReactDOM.render(<HashInput />, document.querySelector('#output'));
  },
  false
);

function decodeHex(s) {
  // utf8 to latin1
  var s = unescape(encodeURIComponent(s));
  var h = '';
  for (var i = 0; i < s.length; i++) {
    h += s.charCodeAt(i).toString(16);
  }
  return h;
}
class Block {
  constructor(index, previousHash, timestamp, data, hash) {
    this.index = index;
    this.previousHash = previousHash.toString();
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash.toString();
  }
}

Reveal.addEventListener('miner', function() {
  let getGenesisBlock = () => {
    return new Block(
      0,
      '0',
      1465154705,
      'my genesis block',
      '816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7'
    );
  };

  let blockchain = [getGenesisBlock()];
  let stop = false;
  const setAndGenerate = (fn, stop, timeout = 100) => {
    if (!stop) {
      setTimeout(function() {
        fn();
      }, timeout);
    }
  };
  const calculateHash = (idx, prevHash, timestamp, data) => {
    return SHA1.hex(idx + prevHash + timestamp + data).toString();
  };

  const getLatestBlock = () => blockchain[blockchain.length - 1];
  const generateNextBlock = () => {
    const previousBlock = getLatestBlock();
    const blockData = {}.toString();
    let nextIndex = previousBlock.index + 1;
    let nextTimestamp = new Date().getTime() / 1000;
    let nextHash = calculateHash(
      nextIndex,
      previousBlock.hash,
      nextTimestamp,
      blockData
    );
    return new Block(
      nextIndex,
      previousBlock.hash,
      nextTimestamp,
      blockData,
      nextHash
    );
  };
  let idx = 0;

  const inner = document.querySelector('#output2');
  const targetBlock =
    '000000000000000117c80378b8da0e33559b5997f2ad55e2f7d18ec1975b9717';
  const go = () => {
    setAndGenerate(() => {
      const blk = generateNextBlock();
      inner.innerHTML = `${blk.timestamp}: ${blk.hash} < ${targetBlock}`;
      if (idx >= 200) {
        stop = true;
      } else {
        idx += 1;
        go();
      }
    });
  };

  go();
});

import './js/app.js';
