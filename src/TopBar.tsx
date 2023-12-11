import { useState } from "react";

const TopBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <nav className="flex justify-between p-3 pr-0">
            <a href="#">
                <img src="/images/logo.svg" alt="" />
            </a>
            
            <ul className="hidden md:text-md lg:text-lg md:flex justify-end w-[25em]">
                <li className="md:mx-3 lg:mx-5 my-3 hover:text-red-500"><a href="#">Home</a></li>
                <li className="md:mx-3 lg:mx-5 my-3 hover:text-red-500"><a href="#">New</a></li>
                <li className="md:mx-3 lg:mx-5 my-3 hover:text-red-500"><a href="#">Popular</a></li>
                <li className="md:mx-3 lg:mx-5 my-3 hover:text-red-500"><a href="#">Trending</a></li>
                <li className="md:mx-3 lg:mx-5 my-3 hover:text-red-500"><a href="#">Categories</a></li>
            </ul>
            <div className=" absolute top-5 right-5 flex md:hidden h-12 z-20">
                    <button onClick={()=>setIsNavOpen(!isNavOpen)}>
                    {!isNavOpen? <img src="/images/icon-menu.svg" alt="menu icon"/> : <img src="/images/icon-menu-close.svg" alt="close icon"/>}
                    </button>
            </div>
            <div className={`flex-col transition-x duration-300 ease-in-out absolute top-0 right-0 z-10 p-5 pt-20 bg-white h-screen w-[275px] ${isNavOpen? 'flex': 'hidden'} md:hidden`}>
                
                <ul>
                    <li className="text-lg mx-6 my-3 hover:text-red-500"><a href="#">Home</a></li>
                    <li className="text-lg mx-6 my-3 hover:text-red-500"><a href="#">New</a></li>
                    <li className="text-lg mx-6 my-3 hover:text-red-500"><a href="#">Popular</a></li>
                    <li className="text-lg mx-6 my-3 hover:text-red-500"><a href="#">Trending</a></li>
                    <li className="text-lg mx-6 my-3 hover:text-red-500"><a href="#">Categories</a></li>
                </ul>
            </div>
            
            
        </nav>
    );
}

export default TopBar;