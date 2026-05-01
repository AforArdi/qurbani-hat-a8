// https://qurbani-hat-a8.vercel.app/data.json
export const getAnimals = async () => {
    const res = await fetch('https://qurbani-hat-a8-server.onrender.com/animals');
    const animals = await res.json();
    return animals;
}
export const getAnimalById = async (id) => {
    // https://qurbani-hat-a8.vercel.app/data.json
    const res = await fetch('https://qurbani-hat-a8-server.onrender.com/animals');
    const animals = await res.json();
    const singleAnimal = animals.find(animal => animal.id === id);
    return singleAnimal;
}



export const getTips = async () => {
    // externam db hosted on render
    const res = await fetch('https://qurbani-hat-a8-server.onrender.com/tips');
    const tips = await res.json();
    return tips;
}
export const getBreads = async () => {
    const res = await fetch('https://qurbani-hat-a8-server.onrender.com/top_breeds');
    const breads = await res.json();
    return breads;
}