import d3 from 'd3'
import { pathGraph } from './path-graph'

const treeData = require('../treeData.json')

Reveal.addEventListener( 'ready', function( event ) {
  const mount = document.querySelector('#treea')
  const updateData = pathGraph(mount, treeData)

  // mount.addEventListener('click', function(evt) {
  //   treeData.children[2].children.push({ name: "H" })
  //   updateData(treeData)
  // })
});
