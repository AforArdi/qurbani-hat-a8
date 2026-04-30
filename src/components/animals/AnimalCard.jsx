import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import defaultPic from '@/assets/qurbaniAnimalsDefaultPic.png'

const AnimalCard = ({ animal }) => {
    return (
        <div>
            <Card className="w-100">
                <Image src={animal?.image || defaultPic} alt={animal?.name} width={200} height={200}></Image>
                <Card.Header>
                    <Card.Title>Become an Acme Creator!</Card.Title>
                    <Card.Description>
                        Visit the Acme Creator Hub to sign up today and start earning credits from your fans and
                        followers.
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