'use client';

import { useGetUserByIdQuery } from '../../redux/services/userApi';
import { increment, decrement } from '../../redux/features/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const CounterTest = () => {
	const count = useSelector((state) => state.counterReducer.counter);
	const dispatch = useDispatch();
	// const count = useAppSelector((state) => state.counterReducer.counter);
	// const dispatch = useAppDispatch();

	const { data, error, isLoading, isFetching } = useGetUserByIdQuery(2);

	if (isLoading || isFetching) return <p>Loading...</p>;
	if (error) return <p>Some error</p>;

	useGetUserByIdQuery;

	return (
		<div>
			<h1>total: {count}</h1>
			<button
				className='bg-green-500 px-3 py-2'
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
				className='bg-blue-500 px-3 py-2'
			>
				Decrement
			</button>

			<div>
				<p>{data.name}</p>
				<p>{data.username}</p>
				<p>{data.email}</p>
			</div>
		</div>
	);
};

export default CounterTest;
