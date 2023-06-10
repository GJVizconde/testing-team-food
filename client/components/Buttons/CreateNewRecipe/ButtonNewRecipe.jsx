import { TfiLayoutListThumb } from "react-icons/tfi"

const ButtonNewRecipe = ({contrail}) => {
	return (
		<>
			<button className=' bg-amber-500 absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 pl-16 pr-16 pt-3 pb-3 text-black bg-opacity-90 rounded-lg tracking-[0.1em] hover:bg-opacity-100 dark:bg-slate-700 dark:bg-opacity-80 dark:hover:bg-opacity-100 transition duration-100 dark:text-white'><TfiLayoutListThumb className=" inline text-2xl border-solid border-2 border-black dark:border-white rounded-full p-2 w-10 h-10 mr-5" /><span className={contrail.className}>Create your own recipe</span></button>
		</>
	);
};

export default ButtonNewRecipe;
