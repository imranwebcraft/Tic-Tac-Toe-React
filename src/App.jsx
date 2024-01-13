import { useState } from 'react';

// Square component
function Square({ value }) {
	return (
		<button className=" w-20 h-20 border border-gray-100 bg-gradient-to-r from-sky-400 to-blue-500 text-white text-2xl rounded m-1 leading-9 hover:opacity-85  transition-all duration-150">
			{value}
		</button>
	);
}

export default function Board() {
	const [square, setSquare] = useState(Array(9).fill(null));

	return (
		<div className="flex flex-col justify-center items-center h-screen w-screen">
			<div className="flex justify-center items-center">
				<Square value={square[0]} />
				<Square value={square[1]} />
				<Square value={square[2]} />
			</div>
			<div className="flex justify-center items-center">
				<Square value={square[3]} />
				<Square value={square[4]} />
				<Square value={square[5]} />
			</div>
			<div className="flex justify-center items-center">
				<Square value={square[6]} />
				<Square value={square[7]} />
				<Square value={square[8]} />
			</div>
		</div>
	);
}
