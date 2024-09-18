import React, { useState } from 'react'
import './App.css';


function Square({value, onClick}){
  return(
    <button className='square' onClick={onClick}>
      {value}
    </button>
  );
}


function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [X, setX] = useState(true);

  const winner = findWinner(squares);

  const status = winner ?  `Winner: ${winner}` : `Next Player: ${X ? 'X' : 'O'} `;

  function handleClick(i){
    if(squares[i] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[i] = X ? 'X' : 'O';
    setSquares(nextSquares);
    setX(!X);
  }


  function renderSquare(i){
    return <Square value={squares[i]} onClick={()=>handleClick(i)} />;
  }

  return(
    <div>
      <div className='#'>
      {status}
      </div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

function findWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for(let i = 0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}



function App() {
  return (
    <div className='game'>
      <div className='board'>
        <Board />
      </div>
    </div>
  )
}

export default App;