import SortingOnClientPage from "@/components/animals/SortingByModal";
import { getAnimals } from "@/lib/services";

const AllAnimalsPage = async () => {
    const animals = await getAnimals();

    return (
        <SortingOnClientPage animals={animals}></SortingOnClientPage>
    );
}

export default AllAnimalsPage;