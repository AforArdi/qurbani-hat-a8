import { getAnimalById } from "@/lib/services";
import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";

const AnimalDetailsPage = async ({ params }) => {
    const { id } = await params;
    const animal = await getAnimalById(id);

    return (
        <div className="max-w-6xl mx-auto my-10">
            <Card className="w-full items-stretch md:flex-row">
                <Image src={animal.image} alt={animal.name} width={400} height={400}
                className="rounded-2xl"
                ></Image>
                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1 space-y-4">
                        <Card.Title className="pr-8 font-bold text-5xl">{animal.name}</Card.Title>
                        <Card.Description className="text-xl">
                            {animal.description}
                        </Card.Description>
                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground">Only 10 spots</span>
                            <span className="text-xs text-muted">Submission ends Oct 10.</span>
                        </div>
                        <Button className="w-full sm:w-auto">Apply Now</Button>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    );
}

export default AnimalDetailsPage;