
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import defaultPic from '@/assets/qurbaniAnimalsDefaultPic.png'
import { FaLocationDot } from "react-icons/fa6";
import { TbCoinTaka } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";


const AnimalCard = ({ animal }) => {
    
    return (
        <div>
            <Card className="">
                <Image src={animal?.image || defaultPic} alt={animal?.name} width={300} height={300}
                className="rounded-lg mx-auto"
                ></Image>
                <Card.Header className="space-y-2">
                    <Card.Title className="font-semibold text-2xl">
                        {animal.name}
                    </Card.Title>
                    <Card.Description className="flex items-center justify-between">
                        <span className="flex items-center text-xl">Price: <TbCoinTaka></TbCoinTaka>{animal.price}</span>
                        <span className="flex items-center text-xl"><FaLocationDot size={15}></FaLocationDot> {animal.location}</span>
                    </Card.Description>
                </Card.Header>
                <Card.Footer className="w-full">
                    <Link href={`/animals/${animal.id}`}>
                        <button className="btn rounded-3xl bg-[#154734] text-white w-full">View Details <FaLongArrowAltRight></FaLongArrowAltRight></button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default AnimalCard;