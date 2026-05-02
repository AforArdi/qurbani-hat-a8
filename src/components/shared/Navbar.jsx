'use client'

import Image from "next/image";
import logo from '@/assets/logo.png'
import { Avatar, Separator } from "@heroui/react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";
import { redirect } from 'next/navigation'

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleSignoutBtn = async () => {
        await authClient.signOut();
        toast.warning("You've been signed out")
        redirect('/signin');
    }
    const navLinks = <>
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/animals">All Animals</NavLink></li>
    </>

    return (
        <div className="bg-background/70 shadow-sm sticky top-0 z-40">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    {/* logo */}
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt="Logo" width={50} height={50} className=""></Image>
                        <h2 className="text-xl text-[#154734] font-bold">QurbaniHat</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {isPending ? <span className="loading loading-ring loading-xl"></span> : user ? 
                    <div className="flex items-center gap-2">
                        <h2>{user.name}</h2>
                        <Avatar>
                            <Avatar.Image alt={user.name} src={user.image}
                                referrerPolicy="no-referrer"
                            />
                            <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        {/* profile btn */}
                        <Link href={'/profile'}>
                            <button
                                className="btn btn-neutral text-white rounded-3xl">Profile</button>
                        </Link>
                        {/* signout btn */}
                        <button
                            onClick={handleSignoutBtn}
                            className="btn bg-red-500 text-white rounded-3xl">Sign out</button>
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
                </div>
            </div>
        </div>
    );
}

export default Navbar;