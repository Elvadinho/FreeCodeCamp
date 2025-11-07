const playsArray = [
  [4, 2, 256],
  [8, 1024, 16],
  [64, 512, 32],
];

const printBoard = (arr) => {
  let board = `
`;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board += `| ${arr[i][j]} |`;
    }
    if (i < 2) {
      board += `
_______________

`;
    } else {
      board += `
`;
    }
  }
  console.log(board);
};

printBoard(playsArray);
