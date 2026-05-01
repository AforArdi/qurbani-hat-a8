'use client'

import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import { Button, Dropdown, Label } from "@heroui/react";

const SortingOnClientPage = ({ animals }) => {
    const [sortingType, setSortingType] = useState('all');
    const [sortedData, setSortedData] = useState(animals);

    useEffect(() => {
        if (sortingType) {
            if (sortingType === 'low') {
                const sortedData = [...animals].sort((a, b) => a.price - b.price);
                setSortedData(sortedData);
            } else if (sortingType === 'high') {
                const sortedData = [...animals].sort((a, b) => b.price - a.price);
                setSortedData(sortedData);
            } else if (sortingType === 'all') {
                setSortedData(animals);
            }
        }
    }, [sortingType, animals])

    return (
        <div className="max-w-6xl mx-auto my-10">
            <h2 className="text-4xl font-bold text-[#154734] text-center my-5">Qurbani Livestock Collection</h2>
            {/* sorting modal */}
            <div className="ml-10 mb-3">
                <details className="dropdown">
                    <summary className="btn rounded-3xl m-1">Sort By</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType('all')}><a>All</a></li>
                        <li onClick={() => setSortingType('low')}><a>Price Low to High</a></li>
                        <li onClick={() => setSortingType('high')}><a>Price High to Low</a></li>
                    </ul>
                </details>
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

export default SortingOnClientPage;