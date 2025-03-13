import { useState } from 'react';



import {FaAlignJustify} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import SideNav from './side-nav/SideNav';

export default function Header () {

    const [sideNav , setSideNav] = useState(false);

    const sideNavToggleHandler = () => {
      setSideNav((currentState) => !currentState)
    }

    const renderOverlay = () => {
      return (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={sideNavToggleHandler}
        ></div>
      );
    };
  
    return (
      <div className="bg-tea-green">
      <div className="w-full mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={sideNavToggleHandler} className="cursor-pointer hover:scale-130 transition-transform duration-200 ease-in-out">
        <FaAlignJustify size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Feast
          <span className="font-bold text-glaucous">Together</span>
        </h1>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
         {/* // TODO: Search components ??? + functionality*/}
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="search meals"
        />
      </div>
      </div>
      {sideNav && <SideNav toggleSideNav={sideNavToggleHandler}/> }
      {sideNav && renderOverlay()}
      </div>
    ); 
}