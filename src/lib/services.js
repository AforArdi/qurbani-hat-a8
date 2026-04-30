// https://qurbani-hat-a8.vercel.app/data.json
export const getAnimals= async ()=>{
    const res = await fetch('https://qurbani-hat-a8.vercel.app/data.json');
    const data = res.json();
    return data;
}
export const getAnimalById= async (id)=>{
    const res = await fetch(`https://qurbani-hat-a8.vercel.app/data.json/${id}.toString()`);
    const data = res.json();
    return data;
}

export const getTips= async ()=>{
    const res = await fetch('tips.json');
    const data = res.json();
    return data;
}