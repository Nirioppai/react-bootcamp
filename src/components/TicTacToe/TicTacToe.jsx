import { React, useState, useEffect } from 'react';
import Square from './Square';
import Board from './Board';

import '../../assets/TicTacToe.css';

export default function TicTacToe() {
  return (
    <div>
      <div className='container'>
        <Board />
      </div>
    </div>
  );
}
