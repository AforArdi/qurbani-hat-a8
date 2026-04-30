import Image from "next/image";
import logo from '@/assets/logo.png'
import { Avatar } from "@heroui/react";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">

        
        <nav className="max-w-6xl mx-auto">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" width={50} height={50} className=""></Image>
                    <h2 className="text-xl text-[#154734] font-bold">QurbaniHat</h2>
                </div>
                <ul className="flex items-center gap-4 text-[#154734]">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/animals">All Animals</NavLink></li>
                </ul>
                <div>
                    <Avatar>
                        <Avatar.Fallback>JR</Avatar.Fallback>
                    </Avatar>
                </div>
            </header>
        </nav>
        </div>
    );
}

export default Navbar;