import { Sprite } from '@pixi/react';
import { useMemo } from 'react';

type BinProps = {
	width?: number;
	height?: number;
	x: number;
	y: number;
	color: number;
};
export function Bin(props: BinProps) {
	return (
		<Sprite
			image={'assets/sprites/bin/bin.svg'}
			anchor={0.5}
			scale={{ x: 0.5, y: 0.5 }}
			x={props.x}
			y={props.y}
			tint={props.color}
		/>
	);
}
