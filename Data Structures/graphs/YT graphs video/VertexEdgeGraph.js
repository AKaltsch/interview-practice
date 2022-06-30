const vertices = ["A", "B", "C", "D", "E"];

const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

// Methods needed for this graph
//  findAdjacentNodes
const findAdjacentNodes = (node) => {
  // loop through edges array
  // is my node in the connection?
  // if yes, push the other node in pair, into adjacentNodes array
  // if no, keep looping

  const adjacentNodes = [];

  for (let edge of edges) {
    const nodeIdx = edge.indexOf(node);
    if (nodeIdx > -1) {
      let adjacentNode = nodeIdx === 0 ? edge[1] : edge[0];
      adjacentNodes.push(adjacentNode);
    }
  }

  return adjacentNodes;
};

const isConnected = (node1, node2) => {
  return edges.some((edge) => {
    return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1;
  });
};

console.log(findAdjacentNodes("C"));
console.log(isConnected("C", "B"));
