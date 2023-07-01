import { Stage } from '@pixi/react';

import { Game } from './Game';
import { Suspense } from 'react';
import { Fallback } from '../Fallback';

export function GameWrapper() {
	return (
		<Suspense fallback={<Fallback />}>
			<Stage
				width={1200}
				height={800}
				options={{ backgroundColor: 0x9999a1 }}
			>
				<Game />
			</Stage>
		</Suspense>
	);
}