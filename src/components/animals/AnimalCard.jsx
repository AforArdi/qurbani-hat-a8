import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import defaultPic from '@/assets/qurbaniAnimalsDefaultPic.png'
import { FaLocationDot } from "react-icons/fa6";
import { TbCoinTaka } from "react-icons/tb";

const AnimalCard = ({ animal }) => {
    return (
        <div>
            <Card className="">
                <Image src={animal?.image || defaultPic} alt={animal?.name} width={300} height={300}
                className="rounded-lg"
                ></Image>
                <Card.Header className="space-y-2">
                    <Card.Title className="font-semibold text-2xl">
                        {animal.name}
                    </Card.Title>
                    <Card.Description className="flex items-center justify-between">
                        <p className="flex items-center text-xl">Price: <TbCoinTaka></TbCoinTaka>{animal.price}</p>
                        <p className="flex items-center text-xl"><FaLocationDot size={15}></FaLocationDot> {animal.location}</p>
                    </Card.Description>
                </Card.Header>
                <Card.Footer>
                    <h2>hi</h2>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default AnimalCard;