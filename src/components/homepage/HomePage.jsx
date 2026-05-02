import { getAnimals } from "@/lib/services";
import AnimalCard from "../animals/AnimalCard";

const HomePage = async () => {
    const animals = await getAnimals();

    return (
        <div className="max-w-6xl mx-auto my-5">
            <h2 className="text-4xl font-bold text-[#154734] text-center my-5">Featured</h2>
            {/* <Marquee pauseOnHover={true} speed={50} gradient={false}> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                {
                    animals.slice(0, 4).map(animal =>
                        <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                    )
                }
            </div>
            {/* </Marquee> */}
        </div>
    );
}

export default HomePage;