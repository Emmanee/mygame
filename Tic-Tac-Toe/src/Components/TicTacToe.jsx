import React, {useState} from "react";
import useTicTacToe from "../hooks/useTicTacToe.jsx";

function TicTacToe(){

    const {board, handleClick, calculateWinner, resetGame, getStatusMessage} = useTicTacToe()

    return(
      <div className="game">
        <div className="staus">
          {getStatusMessage()}
          <button onClick={resetGame} className="reset-button">
             Reset Game 
            </button>
        </div>


        <div className="board">
          {board.map((b,index) => {
            return(
            <button className="cell"
            key={index}
            onClick={() => handleClick(index)}
            disabled = {b !== null}
            >
                {b}
            </button>
            )
          })}
          </div>
      </div>
    );

}
export default TicTacToe
