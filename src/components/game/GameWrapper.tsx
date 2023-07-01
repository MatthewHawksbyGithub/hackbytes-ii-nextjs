'use client';
import { Stage } from '@pixi/react-animated';

import { Game } from './Game';
import { Suspense } from 'react';
import { Fallback } from '../Fallback';

export function GameWrapper() {
	return (
		<Suspense fallback={<Fallback />}>
			<Stage
				width={600}
				height={400}
				options={{ backgroundColor: 0x999999 }}
			>
				<Game />
			</Stage>
		</Suspense>
	);
}
