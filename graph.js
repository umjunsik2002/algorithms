let edges = [ [0, 1], [0, 2], [1, 2], [1, 3], [2, 3], [3, 4] ];

function shortestPath(edges, start, end) {
    // Format a graph with HashMap
    let graph = new Map();
    for (let [u, v] of edges) {
        if (!graph.has(u)) {
            graph.set(u, []);
        }
        if (!graph.has(v)) {
            graph.set(v, []);
        }
        graph.get(u).push(v);
        graph.get(v).push(u);
    }
    
    let queue = [];
    queue.push([start, 0]); // location, distance
    let visited = new Set();
    while (queue.length > 0) {
        let [node, distance] = queue.shift();
        if (node === end) {
            return distance;
        }
        if (graph.has(node)) {
            for (let neighbor of graph.get(node)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, distance + 1]);
                }
            }
        }
    }

    return -1;
}
console.log(shortestPath(edges, 0, 4));

