'use client';

import { increment, decrement } from '../../redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const CounterTest = () => {
	const count = useAppSelector((state) => state.counterReducer.counter);
	const dispatch = useAppDispatch();
	return (
		<div>
			<h1>total: {count}</h1>
			<button
				onClick={() => {
					dispatch(increment());
				}}
			>
				Increment
			</button>
			<br />
			<button
				onClick={() => {
					dispatch(decrement());
				}}
			>
				Decrement
			</button>
		</div>
	);
};

export default CounterTest;
