import SortingByModal from "@/components/animals/SortingByModal";
import { getAnimals } from "@/lib/services";

const AllAnimalsPage = async () => {
    const animals = await getAnimals();

    return (
        <SortingByModal animals={animals}></SortingByModal>
    );
}

export default AllAnimalsPage;