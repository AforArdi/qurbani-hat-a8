import SortingOnClientPage from "@/components/animals/SortingByModal";
import { getAnimals } from "@/lib/services";

export const metadata = {
  title: "QurbaniHat | Animals",
  description: "Choose from healthy livestock Cows, Bulls, Goats & Sheep and book online with ease trust & transparency",
};

const AllAnimalsPage = async () => {
    const animals = await getAnimals();

    return (
        <SortingOnClientPage animals={animals}></SortingOnClientPage>
    );
}

export default AllAnimalsPage;