const vertices = ["A", "B", "C", "D", "E"];

const vertexIdx = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

const findAdjacencies = (node) => {
  const adjacentNodes = [];

  for (let i = 0; i < vertices.length; i++) {
    nodeVertex = vertexIdx[node];
    if (adjacencyMatrix[nodeVertex][i] === 1) {
      adjacentNodes.push(vertices[i]);
    }
  }

  return adjacentNodes;
};

const isConnected = (node1, node2) => {
  const nodeIdx1 = vertexIdx[node1];
  const nodeIdx2 = vertexIdx[node2];

  return !!adjacencyMatrix[nodeIdx1][nodeIdx2];
};

console.log(findAdjacencies("C"));
console.log(isConnected("A", "C"));
