'use client';
import styles from './NavBar.module.css';
import Image from 'next/image';
import logoNormal from './images/food.png';
import logoDark from './images/food_dark.png';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineLogin } from 'react-icons/ai';
import { FiUserPlus } from 'react-icons/fi';
import { useState } from 'react';

const NavBar = () => {
	const [themeDark, setThemeDark] = useState(false);

	const settingTheme = () => {
		if (!themeDark) {
			document.documentElement.classList.add('dark');
			setThemeDark(true);
		} else {
			document.documentElement.classList.remove('dark');
			setThemeDark(false);
		}
	};
	return (
		<nav
			className={`${styles['bg-nav']} md:h-14 lg:h-16 xl:h-20 xl3:h-28 flex absolute top-0 text-white justify-evenly items-center dark:text-black dark:bg-navWhite-500`}
		>
			<div className=' lg:w-1/6 md:w-1/4'>
				<Image
					src={themeDark ? logoDark : logoNormal}
					className='md:w-3/4 lg:w-full xl:w-full p-8'
				/>
			</div>

			<div className='flex justify-between pl-10 pr-10 w-3/4 lg:pl-40 lg:pr-40'>
				<div className=' md:w-96 relative lg:w-2/5'>
					<button
						className='absolute flex justify-center items-center right-1 top-1  h-9 w-9 rounded-full p-1 text-black bg-aqua-400 shadow-boxShadow-custom'
						onClick={() => alert('Searching...')}
					>
						<BiSearchAlt
							className=' text-2xl text-white'
							style={{ pointerEvents: 'none' }}
						/>
					</button>

					<input
						type='text'
						className=' h-11 pl-3 rounded-full w-full outline-none text-gray-700 text-lg dark:bg-slate-700 dark:text-slate-300'
					/>
				</div>

				<div className='flex justify-center items-center'>
					<label className='relative inline-flex items-center cursor-pointer'>
						<input
							type='checkbox'
							value=''
							className='sr-only peer'
							onClick={settingTheme}
						/>
						<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
						<span className='ml-3 text-sm font-medium text-white dark:text-black'>
							Set Theme
						</span>
					</label>
				</div>

				<div className='flex lg:w-64  justify-evenly items-center text-xl   '>
					<p className='cursor-pointer transition duration-300 hover:text-aqua-300'>
						Log in <AiOutlineLogin className='inline ' />
					</p>
					<p className='cursor-pointer transition duration-300 hover:text-aqua-300'>
						Sign Up <FiUserPlus className='inline' />
					</p>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
