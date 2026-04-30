import AnimalCard from "@/components/animals/AnimalCard";
import { getAnimals } from "@/lib/services";

const AllAnimalsPage = async () => {
    const animals = await getAnimals();

    return (
        <div className="max-w-6xl mx-auto my-10">
            <h2 className="text-4xl font-bold text-[#154734] text-center my-5">Qurbani Livestock Collection</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    animals.map(animal =>
                        <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                    )
                }
            </div>
        </div>
    );
}

export default AllAnimalsPage;