import { Bin } from './game-components/Bin';
import { Item } from './game-components/Item';

export function Game() {
	return (
		<>
			<Bin
				color={0xff0000}
				x={300}
				y={675}
			/>
			<Bin
				color={0x00ff00}
				x={500}
				y={675}
			/>
			<Bin
				color={0x7d8cc4}
				x={700}
				y={675}
			/>
			<Bin
				color={0xffffff}
				x={900}
				y={675}
			/>
			<Item
				itemNum='127'
				x={500}
				y={400}
			/>
		</>
	);
}
