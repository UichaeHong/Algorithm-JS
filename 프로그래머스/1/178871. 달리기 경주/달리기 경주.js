function solution(players, callings) {
  const playerPositions = {};
    
  players.forEach((player, index) => {
    playerPositions[player] = index;
  });

  let callPosition;
  for (let i = 0; i < callings.length; i++) {
    const currentPlayer = callings[i];
    callPosition = playerPositions[currentPlayer];

    if (callPosition > 0) {
      const prevPlayer = players[callPosition - 1];
      players[callPosition] = prevPlayer;
      players[callPosition - 1] = currentPlayer;
        
      playerPositions[currentPlayer] = callPosition - 1;
      playerPositions[prevPlayer] = callPosition;
    }
  }

  return players;
}