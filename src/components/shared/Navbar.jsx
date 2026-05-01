'use client'

import Image from "next/image";
import logo from '@/assets/logo.png'
import { Avatar, Separator } from "@heroui/react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";
import { redirect, useRouter } from 'next/navigation'

const Navbar = () => {
    // const router = useRouter();

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    // console.log(user);

    const handleSignoutBtn= async ()=>{
        await authClient.signOut();
        toast.warning("You've been signed out")
        redirect('/signin');
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
                    {isPending ? <span className="loading loading-ring loading-xl"></span> : user ? <div className="flex items-center gap-2">
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
                </header>
            </nav>
        </div>
    );
}

export default Navbar;