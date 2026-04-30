'use client'
import { Card } from "@heroui/react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import userAvatar from '@/assets/userAvatarDefault.png'

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    // console.log(user);

    return (
        <div className="max-w-6xl mx-auto my-10">
            {isPending ? <span className="loading loading-ring loading-xl"></span> : 
            <Card className="w-[80%] mx-auto items-stretch md:flex-row">
                <h2 className="text-3xl font-bold text-[#154734]">Login Your Account</h2>
                <Image src={user?.image || userAvatar} alt={user.name} width={200} height={200}
                    className="rounded-full"
                ></Image>
                <div className="flex flex-1 flex-col gap-3 space-y-3">
                    <Card.Header className="gap-1 space-y-3 mb-auto">
                        <Card.Title className="pr-8 font-bold text-3xl text-[#154734]">{user.name}</Card.Title>
                    </Card.Header>
                    <Card.Footer className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    </Card.Footer>
                </div>
            </Card>}
        </div>
    );
}

export default ProfilePage;