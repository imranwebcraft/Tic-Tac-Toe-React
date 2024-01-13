import { useState } from 'react';
import toast from 'react-hot-toast';

// Square component
function Square({ value, onSquareClick }) {
	return (
		<button
			onClick={onSquareClick}
			className=" w-20 h-20 border border-gray-100 bg-gradient-to-r from-sky-400 to-blue-500 text-white text-2xl rounded m-1 leading-9 hover:opacity-85  transition-all duration-150"
		>
			{value}
		</button>
	);
}

export default function Board() {
	const [square, setSquare] = useState(Array(9).fill(null));
	const [xISNext, setXIsNext] = useState(true);

	function handleSquareClick(index) {
		const nextSquare = square.slice();

		if (square[index]) {
			return toast.error('Alreay played! Try another square.');
		}

		if (xISNext) {
			nextSquare[index] = 'X';
		} else {
			nextSquare[index] = 'O';
		}
		setSquare(nextSquare);
		setXIsNext(!xISNext);
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen w-screen">
			<div className="flex justify-center items-center">
				<Square value={square[0]} onSquareClick={() => handleSquareClick(0)} />
				<Square value={square[1]} onSquareClick={() => handleSquareClick(1)} />
				<Square value={square[2]} onSquareClick={() => handleSquareClick(2)} />
			</div>
			<div className="flex justify-center items-center">
				<Square value={square[3]} onSquareClick={() => handleSquareClick(3)} />
				<Square value={square[4]} onSquareClick={() => handleSquareClick(4)} />
				<Square value={square[5]} onSquareClick={() => handleSquareClick(5)} />
			</div>
			<div className="flex justify-center items-center">
				<Square value={square[6]} onSquareClick={() => handleSquareClick(6)} />
				<Square value={square[7]} onSquareClick={() => handleSquareClick(7)} />
				<Square value={square[8]} onSquareClick={() => handleSquareClick(8)} />
			</div>
		</div>
	);
}
