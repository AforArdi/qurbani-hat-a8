import Image from "next/image";

const TopBreeds = ({breeds}) => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-[#154734] text-center my-5">Top Breeds</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 place-items-center p-2">
                {
                    breeds.map(breed =>
                        <div key={breed.id} className="card w-96 p-0 hover:scale-90 cursor-pointer bg-base-100 image-full shadow-sm">
                            <figure>
                                <Image src={breed.image} alt={breed.name} height={200} width={200}
                                    className="w-full"
                                ></Image>
                                {/* <img src={bread.image} alt={bread.name}></img> */}
                            </figure>
                            <div className="card-body flex flex-col gap-4 items-center">
                                <h2 className="card-title text-2xl">{breed.name}</h2>
                                <p className="font-bengali text-xl text-justify">{breed.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default TopBreeds;