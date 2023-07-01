import { FormEvent, FormEventHandler, useCallback, useState } from 'react';
import { api } from '~/utils/api';

export function DBForm() {
	const hello = api.example.hello.useQuery({ text: 'from tRPC' });

	const addRecord = api.example.createRecord.useMutation({
		onSuccess() {
			console.log('DB!');
		},
	});

	const handleSubmit = useCallback<FormEventHandler>(
		async (event: FormEvent) => {
			event.preventDefault();
			try {
				const highscore = await addRecord.mutateAsync({
					name: 'Bill',
					score: 1000,
				});
			} catch (err) {
				console.error(err, 'failed to add record');
			}
		},
		[addRecord]
	);

	return (
		<form
			action=''
			method='post'
			className='form'
			onSubmit={handleSubmit}
		>
			<div className='numberSection'>
				<label htmlFor='number'>Enter your high score: </label>
				<input
					type='text'
					name='name'
					id='number'
				/>
			</div>
			<div className='inputSection'>
				<input
					type='submit'
					defaultValue='Add number to Database.'
				/>
			</div>
		</form>
	);
}
