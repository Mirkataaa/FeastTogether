import { AiOutlineClose } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FaKitchenSet } from 'react-icons/fa6'
import { MdHelp } from 'react-icons/md'
import { GiCupcake } from 'react-icons/gi'
import { PiPlant } from 'react-icons/pi'
import { LuNotebookTabs } from 'react-icons/lu'


export function SideNav({ toggleSideNav }) {
    return (
        <div
            className='fixed top-0 left-0 w-[300px] h-screen bg-tea-green z-20 duration-300'
        >
            <div
                className="absolute right-4 top-4 cursor-pointer"
                onClick={() => toggleSideNav(false)}
            >
                <AiOutlineClose size={25} color='white' />
            </div>
            <h2 className="text-2xl p-4 text-black bg-white/30">
                Feast <span className="text-glaucous">Together</span>
            </h2>
            <nav>
                <ul className="flex flex-col p-4 text-gray-900">
                    <li className="text-xl py-4 flex hover:scale-130 hover:translate-x-[40px] transition-all duration-200 ease-in-out hover:cursor-pointer">
                        <BsPerson size={30} className="mr-4 text-white bg-icons rounded-full" />
                        My Account
                    </li>
                    <li className="text-xl py-4 flex hover:scale-130 hover:translate-x-[40px] transition-all duration-200 ease-in-out hover:cursor-pointer">
                        <FaKitchenSet size={30} className="mr-4 text-white bg-icons rounded-full" />
                        Just tasly
                    </li>
                    <li className="text-xl py-4 flex hover:scale-130 hover:translate-x-[40px] transition-all duration-200 ease-in-out hover:cursor-pointer">
                        <PiPlant size={30} className="mr-4 text-white bg-icons rounded-full" />
                        Vegan Meals
                    </li>
                    <li className="text-xl py-4 flex hover:scale-130 hover:translate-x-[40px] transition-all duration-200 ease-in-out hover:cursor-pointer">
                        <GiCupcake size={30} className="mr-4 text-white bg-icons rounded-full" />
                        Desserts
                    </li>
                    <li className="text-xl py-4 flex hover:scale-130 hover:translate-x-[40px] transition-all duration-200 ease-in-out hover:cursor-pointer">
                        <MdHelp size={30} className="mr-4 text-white bg-icons rounded-full" />
                        About
                    </li>
                    <li className="text-xl py-4 flex hover:scale-130 hover:translate-x-[40px] transition-all duration-200 ease-in-out hover:cursor-pointer">
                        <LuNotebookTabs size={30} className="mr-4 text-white bg-icons rounded-full" />
                        Write your recipe
                    </li>
                </ul>
            </nav>
        </div>
    );
}