import { useState } from "react";
import toast from "react-hot-toast";

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

export function Board({ xISNext, square, onPlay }) {
	const winner = calculateWinner(square);
	let status;
	if (winner) {
		status = `Winner: ${winner}`;
	} else {
		status = "Next player: " + (xISNext ? "X" : "O");
	}

	function handleSquareClick(index) {
		const nextSquare = square.slice();

		// Check if the square is already played
		if (square[index]) {
			return toast.error("Alreay played! Try another square.");
		}
		// Check if the game is over
		if (calculateWinner(square)) {
			return toast.error("Gamer Over!");
		}
		// Put X or O based on xIsNext condition
		if (xISNext) {
			nextSquare[index] = "X";
		} else {
			nextSquare[index] = "O";
		}

		// Pass the changes to the Game board
		onPlay(nextSquare);
	}

	return (
		<>
			<h1 className="text-2xl text-center pb-5 font-medium">{status}</h1>

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
		</>
	);
}

export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [xISNext, setXIsNext] = useState(true);
	const [currentMove, setCurrentMove] = useState(0);

	// Get latest or current move
	const currentSquare = history[currentMove];

	function handlePlay(nextSquare) {
		setXIsNext(!xISNext);
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
		// ...history = all null and nextSquare = currentMove er change
		//Now it possible to compare between these two
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	function jumpTo(move) {
		setCurrentMove(move);
		setXIsNext(move % 2 === 0);
	}

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = `Go to the move # ${move}`;
		} else {
			description = `Start the game`;
		}
		return (
			<li
				key={move}
				className=" border p-2 rounded-md mb-2 bg-slate-900 hover:bg-slate-800 transition-all duration-200 ease-in-out"
			>
				<button onClick={() => jumpTo(move)} className="">
					{description}
				</button>
			</li>
		);
	});

	return (
		<div className="p-10 md:p-20 w-screen h-screen flex flex-col md:flex-row gap-10 justify-center items-center">
			<div>
				<Board xISNext={xISNext} square={currentSquare} onPlay={handlePlay} />
			</div>
			<div>
				<h1 className="text-2xl text-center py-5 font-medium">History</h1>
				<ol className=" bg-slate-950 p-5 rounded-lg">{moves}</ol>
			</div>
		</div>
	);
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
