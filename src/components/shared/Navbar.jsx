'use client'

import Image from "next/image";
import logo from '@/assets/logo.png'
import { Avatar, Separator } from "@heroui/react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";

const Navbar = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user;
    console.log(user);
    const handleSignoutBtn= async ()=>{
        await authClient.signOut();
        toast.warning("You've been signed out")
    }

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
                    {user ? <div className="flex items-center gap-2">
                        <Avatar>
                            <Avatar.Image alt={user.name} src={user.image} />
                            <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        <button
                        onClick={handleSignoutBtn}
                        className="btn bg-[#154734] text-white rounded-3xl">Sign out</button>
                    </div> :
                        <div className="flex items-center gap-2">
                            <Link href={'/signin'}>
                                <button className="btn bg-[#154734] text-white rounded-3xl">Sign in</button>
                            </Link>
                            <Separator orientation="vertical" variant="tertiary"></Separator>
                            <Link href={'/signup'}>
                                <button className="btn bg-[#154734] text-white rounded-3xl">Sign up</button>
                            </Link>
                        </div>}
                </header>
            </nav>
        </div>
    );
}

export default Navbar;