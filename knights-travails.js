// 8x8 chessboard, filled with arrays containing all allowed moves for each square
function createBoard() {
  let board = new Map;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
       board.set(`${[i, j]}`, []) ;
      //board.set(`${[i, j]}`, []);

      }
    }
    return board;
}

const chessboard = createBoard();
//console.log(chessboard.keys());
// get all possible moves for the whole chessboard
function getAllMoves() {
  for (let [key] of chessboard) {
    let [x, y] = key.split(',');
    //console.log([x, y]);
    x = parseInt(x);
    y = parseInt(y);
    let allowedM = allowedMoves([x, y])
    chessboard.set(key, allowedM);
   // console.log(allowedM);
  }
}

getAllMoves();
//console.log(chessboard.get(`${[0, 0]}`));
//console.log(chessboard.get("0,0"));


// possible moves of a knight that's standing in coordinates XY
function allowedMoves(coordinates) {
  const possibleMoves = [
    //x // y
    [1, 2],
    [2, 1],
    [2, - 1],
    [1, - 2],
    [- 1, - 2],
    [- 2, - 1],
    [- 2, 1],
    [- 1, 2]
  ];
  
  const moves = possibleMoves.map((move) => {
    const newX = coordinates[0] + move[0];
    const newY = coordinates[1] + move[1];
    if (newX < 8 && newX >= 0 &&
    newY < 8 && newY >= 0) {
      return `${newX},${newY}`;
    }
  }).filter((move) => move);
 // console.log(moves);
  return moves;
}
allowedMoves([3, 3]);
// find the shortest path from start [x, y] to end [x, y], using breadth-first search algorithm
function knightMoves(start, end) {
  console.log(start);
  console.log(end);
  const visited = new Set();
  const queue = [];
  const paths = [];
  
  queue.push([start, [start]]);
  visited[start] = true;
  //console.log(queue);
  //console.log(visited);
  
  while (queue.length > 0) {
    let [location, path] = queue.shift();
    
  //  console.log(location);
   // console.log([location, path]);
    visited[location] = true;
    visited.add(location); // needed?
    
    if (location == end) {
      paths.push(path);
      console.log(paths);
      break;
    }
    
    let possibleMoves = chessboard.get(location);
   // console.log(possibleMoves);
    //console.log(Map.isMap(possibleMoves));
    for (let move of possibleMoves) {
      if (!visited.has(move)) {
       queue.push([move, [...path, move]]);
      // console.log(queue);

      }

    }
    
 }
}



knightMoves('0,0', '7,7');


//console.log(allowedMoves(0, 0))

/*function allMovesGraph(board) {
  chessboard.
  
  
}*/


/*function knightMoves(start, end) {
  
  let k = start;
  let queue = [[start]];
  let visited = [[start]];
  
  while (queue.length > 0) {
         // console.log(queue);

    // knight's path
    let path = queue.shift();
    let current = path[path.length - 1];
    if (current == end) {
      console.log("aa");
      return path;
    };
    //console.log(end);
    for (const move of possibleMoves) {
      let nextPosition = [current[0] + move[0], current[1] + move[0]];
    if (board.has(`${nextPosition}`) &&  board.get(`${nextPosition}`) == null) {
      queue.push([...path, nextPosition]);
      visited.push(nextPosition);
      console.log(queue);

    }
   // if (board.has(nextPosition)
      //console.log(board.has(`${nextPosition}`));
    }
    return null;
  }
  
  
  //console.log(queue)
  
}

*/
//knightMoves([0, 0], [1, 2]);
/*
console.log(board);
let n1 = board.get(`${[0, 0]}`);


for (const key of board.keys()) {
  console.log(key);
}
console.log(n1);
console.log(board.keys())

*/






/*
function knightMoves(start, end) {

  let possibleMoves = [
    //x // y
    [1, 2],
    [2, 1],
    [2, - 1],
    [1, - 2],
    [- 1, - 2],
    [- 2, - 1],
    [- 2, 1],
    [- 1, 2]
  ];

  let queue = [];
  let visited = [];
  queue.push([start]);
  //visited.push(start);

  while (queue.length > 0) {
      
    let movement = queue.shift();
    //visited.push(movement);
    if (visited.includes == [end]) {
        return visited;
      }
      for (let i = 0; i < possibleMoves.length; i++) {

      let move = [movement[0] + possibleMoves[i][0], movement[1] + possibleMoves[i][1]];

      if (moveX >= 0 && moveX <= 7 && moveY >= 0 && moveY <= 7) {
        queue.push([moveX, moveY]);
      }
      }
    

}
console.log(queue);
  //let board = [[0, 0], [7, 7]]
}
*/



