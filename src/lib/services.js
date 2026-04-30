// https://qurbani-hat-a8.vercel.app/data.json
export const getAnimals = async () => {
    const res = await fetch('https://qurbani-hat-a8.vercel.app/data.json');
    const animals = await res.json();
    return animals;
}
export const getAnimalById = async (id) => {
    const res = await fetch('https://qurbani-hat-a8.vercel.app/data.json');
    const animals = await res.json();
    const singleAnimal = animals.find(animal => animal.id === id);
    return singleAnimal;
}

export const getTips = async () => {
    const res = await fetch('tips.json');
    const data = res.json();
    return data;
}