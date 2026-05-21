/**
 * Breadth-first search (BFS) explores a graph level by level, visiting all neighbors
 * of a node before moving deeper. It uses a queue (FIFO) to track which node to visit next.
 * BFS is great for finding the shortest path in an unweighted graph, since it always
 * reaches a node via the fewest possible edges.
 * See: [BFS on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Breadth-first_search)
 * @module
 */

function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const order = [];
  visited.add(start);
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return order;
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"]
};

console.log(bfs(graph, "A"));
