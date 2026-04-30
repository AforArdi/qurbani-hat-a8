import { getAnimals } from "@/lib/services";
import AnimalCard from "../animals/AnimalCard";
import Marquee from "react-fast-marquee";

const HomePage = async () => {
    const animals = await getAnimals();
    console.log(animals);
    return ( 
        <div className="max-w-6xl mx-auto my-5">
            <h2 className="text-4xl text-[#154734] text-center my-5">Featured</h2>
            <Marquee pauseOnHover={true}>
                <div className="flex flex-wrap items-center gap-4 justify-center">
                    {
                        animals.slice(0,4).map(animal=>
                            <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                        )
                    }
                </div>
            </Marquee>
        </div>
     );
}
 
export default HomePage;