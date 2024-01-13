// Square component

function Square() {
	return (
		<button className=" w-20 h-20 border border-gray-100 bg-indigo-500 text-white text-2xl rounded m-1 leading-9">
			X
		</button>
	);
}

export default function Board() {
	return (
		<div>
			<div>
				<Square />
				<Square />
				<Square />
			</div>
			<div>
				<Square />
				<Square />
				<Square />
			</div>
			<div>
				<Square />
				<Square />
				<Square />
			</div>
		</div>
	);
}
