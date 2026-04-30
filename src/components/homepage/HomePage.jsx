import { getAnimals } from "@/lib/services";
import AnimalCard from "../animals/AnimalCard";
import Marquee from "react-fast-marquee";

const HomePage = async () => {
    const animals = await getAnimals();

    return ( 
        <div className="max-w-6xl mx-auto my-5">
            <h2 className="text-4xl font-bold text-[#154734] text-center my-5">Featured</h2>
            <Marquee pauseOnHover={true} speed={50} gradient={false}>
                <div className="flex gap-5 pr-5">
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