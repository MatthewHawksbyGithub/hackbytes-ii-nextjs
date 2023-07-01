import { Sprite, PixiRef, useTick } from '@pixi/react';
// import { DEG_TO_RAD } from 'pixi.js';
import { useCallback, useMemo, useRef, useState } from 'react';
import '@pixi/events';
import { FederatedPointerEvent } from '@pixi/events';

function validateNumber(str: string) {
	if (!str.match(/\d/)) return false;
	if (str.length > 3) return false;
	const num = parseInt(str);
	if (num < 1 || num > 163) return false;

	return true;
}
let timer = 0;

type ISprite = PixiRef<typeof Sprite>;

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

	const itemRef = useRef<ISprite>(null!);

	useTick((delta) => {
		if (!itemRef.current) return;
		// timer += delta * 0.05;
		// const theta = timer;
		// const x = props.x + Math.cos(theta) * 100;
		// const y = props.y + Math.sin(theta) * 100;
		// itemRef.current.position.set(x, y);
	});

	const [isDragged, setDragged] = useState<boolean>(false);

	const handlePointerDown = useCallback((event: FederatedPointerEvent) => {
		setDragged(true);
		console.log('pointer down');
	}, []);
	const handlePointerUp = useCallback((event: FederatedPointerEvent) => {
		if (isDragged) {
			setDragged(false);
		}
	}, []);

	return (
		<Sprite
			interactive
			onpointerdown={handlePointerDown}
			onpointerup={handlePointerUp}
			ref={(item) => {
				if (!item) return;
				itemRef.current = item; // assign ref
			}}
			image={`assets/sprites/items/genericItem_color_${num}.png`}
			anchor={0.5}
			scale={{ x: 0.75, y: 0.75 }}
			x={props.x}
			y={props.y}
		/>
	);
}
