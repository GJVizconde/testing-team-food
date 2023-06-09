"use client"
import Image from 'next/image';
import imagen from './images/logo.png';
import { useRouter } from 'next/navigation';
import { Kalam } from 'next/font/google';
import styles from "./LandingPage.module.css"
const videoFood = require('./videos/food.mp4');
const kalam = Kalam({
	subsets: ['devanagari', 'latin', 'latin-ext'],
	weight: '400',
});

const LandingPage = () => {
	const router = useRouter();

	return (
		<div className='fixed flex items-center justify-center'>
			<video autoPlay loop  className='h-screen w-screen object-cover'>
				<source src={videoFood} />
			</video>
			<div className='fixed '>
				<Image src={imagen} className='w-100' />
				<div className='flex justify-center items-center mt-5 mb-5 p-5'>
					<button
						className={`text-cyan-50 font-Satisfy w-40 text-2xl ${styles['animate-color-change']} p-2 rounded-xl hover:opacity-100 border-2 transition duration-200`}
						onClick={() => router.push('/home')}>
						<span className={kalam.className}>Start</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
