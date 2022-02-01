
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vtx1, vtx2) {
        this.adjacencyList[vtx1].push(vtx2)
        //in a directed graph, you would only have v1 push into v2
        this.adjacencyList[vtx2].push(vtx1)
    }

    removeEdge(vtx1, vtx2) {
        this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter((vtx) => vtx !== vtx2);
        this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter((vtx) => vtx !== vtx1);
    }

    removeVertex(vtx) {
        while (this.adjacencyList[vtx].length) {
            const adjacentVertex = this.adjacencyList[vtx].pop();
            this.removeEdge(vtx, adjacentVertex);
        }
        delete this.adjacencyList[vtx];
    }

    DFSrecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function dfs(vertex) {
            if (!vertex) return null;

            visited[vertex]= true;
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }

        dfs(start)
        return result;
    }

    DFSiterative(start) {
        const stack = []
        const visited = {}
        const result = []
        const adjacencyList = this.adjacencyList;

        stack.push(start)
        while (stack.length !== 0) {
            let vertex = stack.pop()
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                adjacencyList[vertex].forEach(neighbor => {
                    if (!visited[neighbor]) stack.push(neighbor)
                })
            }
        }

        // stack.push(start)
        // visited[start] = true;
        // while (stack.length !== 0) {
        //     let vertex = stack.pop()
        //     result.push(vertex);
        //     adjacencyList[vertex].forEach(neighbor => {
        //         if (!visited[neighbor]) {
        //             visited[neighbor] = true;
        //             stack.push(neighbor);
        //         }
        //     })
        // }

        return result;
    }

    BFSsearch(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let vertex;

        visited[start] = true;

        while (queue.length) {
            vertex = queue.shift()
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result
    }

}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g.DFSrecursive("A"))
console.log(g.DFSiterative("A"))
console.log(g.BFSsearch("A"))
//console.log(g)