import { Sprite } from '@pixi/react-animated';
import { useMemo } from 'react';

function validateNumber(str: string) {
	if (!str.match(/\d/)) return false;
	if (str.length > 3) return false;
	const num = parseInt(str);
	if (num < 1 || num > 163) return false;

	return true;
}

type ItemProps = {
	itemNum: string;
	x: number;
	y: number;
};
export function Item(props: ItemProps) {
	const num = useMemo(() => {
		if (!validateNumber(props.itemNum)) {
			return '001';
		}
		if (props.itemNum.length === 1) {
			return '00' + props.itemNum;
		}
		if (props.itemNum.length === 2) {
			return '0' + props.itemNum;
		}
		return props.itemNum;
	}, [props.itemNum]);

	return (
		<Sprite
			image={`items/kenney_generic-items/PNG/Colored/genericItem_color_${num}.png`}
			anchor={0.5}
			scale={{ x: 0.5, y: 0.5 }}
			x={props.x}
			y={props.y}
		/>
	);
}
