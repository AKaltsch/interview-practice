//terminology
//
//vertex => node
//edge => connection
////edges can be weighted

//types of graphs
//// undirected graph -> 2 way connections/no directions to the connections
//// directed graph -> direction assigned to an edge/connection
//// weighted graph -> has a value associated with each edge/connection
//// unweeghted -> no values associated with each edge

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1].push(vtx2);
    //in a directed graph, you would only have v1 push into v2
    this.adjacencyList[vtx2].push(vtx1);
  }

  removeEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
      (vtx) => vtx !== vtx2
    );
    this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
      (vtx) => vtx !== vtx1
    );
  }

  removeVertex(vtx) {
    while (this.adjacencyList[vtx].length) {
      const adjacentVertex = this.adjacencyList[vtx].pop();
      this.removeEdge(vtx, adjacentVertex);
    }
    delete this.adjacencyList[vtx];
  }
}

let g = new Graph();
g.addVertex("San Francisco");
g.addVertex("Los Angeles");
g.addVertex("San Mateo");

g.addEdge("San Francisco", "San Mateo");
g.addEdge("San Francisco", "Los Angeles");
g.addEdge("San Mateo", "Los Angeles");

// g.removeEdge("San Mateo", "Los Angeles")
// g.removeVertex("Los Angeles")

console.log(g);
