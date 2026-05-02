import { getAnimalById } from "@/lib/services";
import { Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { CircleFill } from "@gravity-ui/icons";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";
import BookNowModal from "@/components/animals/BookNowModal";
import { notFound } from 'next/navigation'

export const generateMetadata = async ({params}) => {
    const { id } = await params;
    console.log(id, 'id')
    const animal = await getAnimalById(id);
    return {
    title: animal?.name,
    description: animal?.description,
  }
};

const AnimalDetailsPage = async ({ params }) => {
    const { id } = await params;
    const animal = await getAnimalById(id);

    if(!animal){
        notFound()
    }

    return (
        <div className="max-w-6xl mx-auto my-10">
            <Card className="w-[80%] mx-auto items-stretch md:flex-row">
                <div className="relative">
                    <Image src={animal.image} alt={animal.name} width={300} height={300}
                        className="rounded-2xl"
                    ></Image>
                    <Chip className="absolute top-2 left-6">
                        <CircleFill width={6} />
                        <Chip.Label>{animal.category}</Chip.Label>
                    </Chip>
                </div>
                <div className="flex flex-1 flex-col gap-3 space-y-3">
                    <Card.Header className="gap-1 space-y-3 mb-auto">
                        <Card.Title className="pr-8 font-bold text-3xl text-[#154734]">{animal.name}</Card.Title>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2"><FaLocationDot></FaLocationDot> {animal.location}</p>
                            <Separator orientation="vertical"></Separator>
                            <p className="flex items-center gap-2"><IoIosPricetag></IoIosPricetag> {animal.breed}</p>
                        </div>
                        <Card.Description className="text-xl">
                            {animal.description}
                        </Card.Description>
                        <div>
                            <h2 className="text-xl font-semibold text-[#154734]">Weight: {animal.weight} kg</h2>
                            <h2 className="text-xl font-semibold text-[#154734]">Age: {animal.age} yrs</h2>
                        </div>
                    </Card.Header>
                    <Card.Footer className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="w-full rounded-lg bg-[#F3F7F0] p-4 flex items-center justify-between">
                            <h2 className="flex items-center text-2xl font-bold text-[#154734]"><TbCurrencyTaka></TbCurrencyTaka> {animal.price}</h2>
                            <BookNowModal></BookNowModal>
                        </div>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    );
}

export default AnimalDetailsPage;