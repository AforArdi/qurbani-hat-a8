// https://qurbani-hat-a8.vercel.app/data.json
export const getAnimals= async ()=>{
    const res = await fetch('https://qurbani-hat-a8.vercel.app/data.json');
    const data = res.json();
    return data;
}