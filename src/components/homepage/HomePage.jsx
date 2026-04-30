import { getAnimals } from "@/lib/services";
import AnimalCard from "../animals/AnimalCard";

const HomePage = async () => {
    const animals = await getAnimals();
    console.log(animals);
    return ( 
        <div className="max-w-6xl mx-auto my-5">
            <h2 className="text-3xl text-[#154734] text-center my-4">Featured</h2>
            <div>
                {
                    animals.slice(0,4).map(animal=>
                        <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                    )
                }
            </div>
        </div>
     );
}
 
export default HomePage;