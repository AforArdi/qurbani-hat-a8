import { getAnimalById } from "@/lib/services";
import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";

const AnimalDetailsPage = async ({params}) => {
    const {id} = await params;
    const animal = await getAnimalById(id);

    return (
        <div className="max-w-6xl mx-auto my-10">
            <Card className="w-full items-stretch md:flex-row">
                <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
                    <Image src={animal.image} alt={animal.name} width={400} height={400}></Image>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1">
                        <Card.Title className="pr-8">Become an ACME Creator!</Card.Title>
                        <Card.Description>
                            Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet
                            faucibus etiam.
                        </Card.Description>
                        <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
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