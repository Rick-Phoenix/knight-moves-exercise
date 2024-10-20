function calculateMoves([startX, startY]) {

  if (startX < 0 || startX > 7) return false;
  if (startY < 0 || startY > 7) return false;

  const potentialMoves = [
    [startX - 2, startY + 1],
    [startX - 1, startY + 2],
    [startX + 1, startY + 2],
    [startX + 2, startY + 1],
    [startX + 2, startY - 1],
    [startX + 1, startY - 2],
    [startX - 1, startY - 2],
    [startX - 2, startY - 1],
  ]

  const possibleMoves = [];

  for (move of potentialMoves) {
    if (move[0] < 8 && move[0] >= 0 && move[1] < 8 && move[1] >= 0) possibleMoves.push(move);
  }

  if (possibleMoves.length === 0) return false;
  return possibleMoves;
}

function knightMove([startX, startY], [endX, endY]) {

  const startVertex = [startX, startY];
  const endVertex = [endX, endY];

  let queue = [endVertex];
  let target = startVertex;
  let moveCount = 0;
  let moves = [startVertex];

  while (queue.length > 0)  {

    let currentVertex = queue.shift();
    let potentialMoves = calculateMoves(currentVertex);
    if (!potentialMoves) throw new Error('Invalid Input');
    
    for (const vertex of potentialMoves) {
      if (vertex[0] === target[0] && vertex[1] === target[1]) {
        if (vertex[0] === endX && vertex[1] === endY) {
          console.log(`You made it in ${moveCount} moves! Here's your path:`);
          moves.forEach((move) => console.log(move));
          return;
        };
        moves.push(currentVertex);
        target = currentVertex;
        queue = [endVertex];
        moveCount++;
        break;
      } 
      
      else {
        queue.push(vertex); 
      };
    }

  }
}

const test = knightMove([3, 3], [0, 0]);


