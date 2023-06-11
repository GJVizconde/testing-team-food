import { Quicksand } from "next/font/google";
import { IoFootstepsOutline } from "react-icons/io5"
import { AiOutlineDollar } from "react-icons/ai"
const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400"]
})
const Card = (props) => {
	const { id, name, img, description, cost, steps, side } = props;

	return (
		<>
			{side % 2 === 1 ? (
				<div className=' bg-white dark:bg-sky-950 w-4/5 shadow-[4px_4px_5px_3px_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_5px_3px_rgba(179, 179, 179, 0.2)] dark:text-amber-400 m-auto flex p-7  '>
					<img
						src={img}
						alt={id}
						className='w-52 h-52 object-cover shadow-[0_0_5px_3px_gray] dark:shadow-[0_0_5px_3px_white]'
					/>
					<div className='pl-5 pr-5'>
						<h2 className=' text-2xl tracking-[0.2rem] border-b-2 dark:text-white dark:hover:text-aqua-400 border-slate-400 cursor-pointer hover:text-orange-400'>
							{name}
						</h2>
						<p className={quicksand.className}>
							<span >Description:</span> <span>{description}</span>
						</p>
						<p className="flex items-center mt-3 text-aqua-400 dark:text-white"><AiOutlineDollar className="inline text-2xl"/><span className="ml-3">{cost} usd</span></p>
						<p className="flex items-center mt-3 text-aqua-400 dark:text-white"><IoFootstepsOutline className="inline text-2xl" /><span className="ml-3">{steps} steps</span></p>
					</div>
				</div>
			) : (
				<div className=' bg-white w-4/5 dark:bg-sky-950 dark:text-amber-400 shadow-[4px_4px_5px_3px_rgba(0,0,0,0.2)] m-auto flex p-7 dark:shadow-[4px_4px_5px_3px_rgba(179, 179, 179, 0.2)] '>
					<div className='pl-5 pr-5'>
						<h2 className=' text-2xl text-end border-b-2 tracking-[0.2rem] dark:text-white dark:hover:text-aqua-400  border-slate-400 cursor-pointer hover:text-orange-400'>
							{name}
						</h2>
						<p className={quicksand.className}>
							<span >Description:</span> <span>{description}</span>
						</p>
						<p className="flex items-center mt-3 text-aqua-400 dark:text-white"><AiOutlineDollar className="inline text-2xl"/><span className="ml-3">{cost} usd</span></p>
						<p className="flex items-center mt-3 text-aqua-400 dark:text-white"><IoFootstepsOutline className="inline text-2xl" /><span className="ml-3">{steps} steps</span></p>
					</div>
					<img
						src={img}
						alt={id}
						className='w-52 h-52 object-cover shadow-[0_0_5px_3px_gray] dark:shadow-[0_0_5px_3px_white]'
					/>
				</div>
			)}
		</>
	);
};

export default Card;
