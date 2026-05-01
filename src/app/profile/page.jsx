'use client'
import { Avatar, Card } from "@heroui/react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import userAvatar from '@/assets/userAvatarDefault.png'
import ProfileUpdateModal from "@/components/profile/ProfileUpdateModal";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    // console.log(user);

    return (
        <div className="flex items-center justify-center my-10">
            {isPending ? <span className="loading loading-ring loading-xl"></span> :
                <Card className="w-100">
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-2xl font-bold text-[#154734]">Your Profile</h2>
                        {/* adding a default alt is the solution of the error I was having when clicking on the signout button on the profile page */}
                        <Image src={user?.image || userAvatar} alt={user?.name || "User's image"} height={200} width={200} className="rounded-full"></Image>
                        <Card.Header className="flex flex-col items-center gap-2">
                            <Card.Title className="font-bold text-3xl">{user?.name}</Card.Title>
                            <Card.Description>{user?.email}</Card.Description>
                        </Card.Header>
                        <Card.Footer className="flex gap-2">
                            <ProfileUpdateModal></ProfileUpdateModal>
                        </Card.Footer>
                    </div>
                </Card>}
        </div>
    );
}

export default ProfilePage;