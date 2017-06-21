import * as d3 from "d3";

export const pathGraph = (eleName, treeData, opts = {}) => {
  var margin = { top: 40, right: 90, bottom: 50, left: 90 },
    width = 660 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


  // declares a tree layout and assigns the size
  const treemap = d3.tree().size([width, height]);

  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  const svg = d3
    .select(eleName)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  let g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const updateData = newData => {
    //  assigns the data to a hierarchy using parent-child relationships
    let nodes = treemap(d3.hierarchy(newData));

    const color = d3.scaleOrdinal(d3.schemeCategory10).domain(d3.range(0, 8));

    // adds the links between the nodes
    const link = g
      .selectAll(".link")
      .data(nodes.descendants().slice(1))
      .enter()
      .append("path")
      .attr("class", "link")
      .style("stroke-width", 1)
      .attr("d", function(d) {
        return (
          "M" + d.x + "," + d.y + "C" + d.x + "," + (d.y + d.parent.y) / 2 + " " + d.parent.x + "," + (d.y + d.parent.y) / 2 + " " + d.parent.x + "," + d.parent.y
        );
      });

    link.exit().remove();

    // adds each node as a group
    const node = g
      .selectAll(".node")
      .data(nodes.descendants())
      .enter()
      .append("g")
      .attr("class", function(d) {
        return "node" + (d.children ? " node--internal" : " node--leaf");
      })
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

    node.exit().remove();

  const parentTree = (d) => {
    let nodeLinks = []
    while(d.parent) {
      nodeLinks.push(d)
      d = d.parent
    }
    nodeLinks = nodeLinks.concat(d)
    return nodeLinks
  }

  const activeLink = (d, o) => {
    if (d === o || d.parent === o) return true;
  }
  node
    .on('mouseover', function(d) { // on mouse in show line, circles and text
      const data = d3.select(this)
      const linkedNodes = parentTree(d)
      link
        .style('stroke-width', o => activeLink(d, o) ? 4 : 1)
        .style('stroke', o => activeLink(d, o) ? 'red' : 'white')
          .transition(500)

      rect
        .style('stroke-width', o => activeLink(d, o) ? 4 : 1)
        .transition(500)

    })
    .on('mouseout', d => {
      const data = d3.select(this);
      // console.log('d ->', d)
      link
        .style('stroke-width', 1)
        .style('stroke', 'white')

      rect
        .style('stroke-width', 1)
    })

    // adds the circle to the node
    const rect = node
      .append("rect")
      .attr("height", 50)
      .attr("width", 50)
      .style("fill", (d, i) => color(i))
      .attr("x", "-0.7em");

    // adds the text to the node
    node
      .append("text")
      .attr("dy", ".52em")
      .attr("y", function(d) {
        return d.children ? -18 : 20;
      })
      .attr("dx", "-.2em")
      .style("text-anchor", "middle")
      .text(function(d) {
        return d.data.name;
      });

    // const updateSvg = d3.select('svg').transition()
    // // g.selectAll(".link")
    // g = updateSvg.selectAll('g')
    // g.selectAll('.link')
    // .data(nodes.descendants().slice(1))

    // .attr('d', )
  };

  updateData(treeData);
  return updateData;
};

export default pathGraph;
