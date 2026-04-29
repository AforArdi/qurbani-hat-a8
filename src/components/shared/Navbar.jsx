import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/logo.png'
import { Avatar } from "@heroui/react";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" width={50} height={50} className=""></Image>
                    <h2 className="text-xl font-bold">QurbaniHat</h2>
                </div>
                <ul className="flex items-center gap-4">
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
    );
}

export default Navbar;