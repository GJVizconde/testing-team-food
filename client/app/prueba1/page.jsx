'use client';

import { useGetUsersQuery } from '../../redux/services/userApi';
import { increment, decrement } from '../../redux/features/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const CounterTest = () => {
	const count = useSelector((state) => state.counterReducer.counter);
	const dispatch = useDispatch();
	// const count = useAppSelector((state) => state.counterReducer.counter);
	// const dispatch = useAppDispatch();

	const { data, error, isLoading, isFetching } = useGetUsersQuery(null);

	if (isLoading || isFetching) return <p>Loading...</p>;
	if (error) return <p>Some error</p>;

	useGetUsersQuery;

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

			{data?.map((user, index) => (
				<div key={index}>
					<p>{user.name}</p>
					<p>{user.username}</p>
					<p>{user.email}</p>
				</div>
			))}
		</div>
	);
};

export default CounterTest;
