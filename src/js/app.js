import d3 from 'd3'
import { pathGraph } from './path-graph'
// import React from 'react'
// import ReactDOM from 'react-dom'
const treeData = require('../treeData.json')

Reveal.addEventListener( 'ready', function( event ) {
  const mount = document.querySelector('#treea')
  pathGraph(mount, treeData)
});
