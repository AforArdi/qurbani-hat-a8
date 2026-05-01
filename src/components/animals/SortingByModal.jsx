'use client'
import { Button, Dropdown, Label } from "@heroui/react";
import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";

const SortingByModal = ({ animals }) => {
    const [sortingType, setSortingType] = useState('all');
    const [sortedData, setSortedData] = useState(animals);

    useEffect(() => {
        if (sortingType === 'low') {
            const sortedAnimals = [...sortedData].sort((a, b) => a.price - b.price)
            setSortedData(sortedAnimals)
        } else if (sortingType === 'high') {
            const sortedAnimals = [...sortedData].sort((a, b) => b.price - a.price)
            setSortedData(sortedAnimals)
        } else if (sortingType === 'all') {
            setSortedData(sortedData)
        }
    }, [sortedData])

    return (
        <div className="max-w-6xl mx-auto my-10">
            <h2 className="text-4xl font-bold text-[#154734] text-center my-5">Qurbani Livestock Collection</h2>
            {/* sorting modal */}
            <div className="ml-10 mb-3">
                <Dropdown>
                    <Button aria-label="Menu" variant="secondary">
                        Sort By
                    </Button>
                    <Dropdown.Popover>
                        {/* onAction={(key) => setSortingType(key)} */}
                        <Dropdown.Menu onAction={(key) => setSortingType(key)}>
                            <Dropdown.Item key="all">All</Dropdown.Item>
                            <Dropdown.Item key="low">Price low to high</Dropdown.Item>
                            <Dropdown.Item key="high">Price high to low</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>
            </div>
            {/* main mapping */}
            <div className="grid grid-cols-3 gap-6">
                {
                    sortedData.map(animal =>
                        <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                    )
                }
            </div>
        </div>
    );
}

export default SortingByModal;