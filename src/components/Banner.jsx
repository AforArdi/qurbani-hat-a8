import Image from "next/image";
import banner from '@/assets/banner.png'

const Banner = () => {
    return ( 
        <div className="max-w-6xl mx-auto mt-5 flex items-center justify-between">
            <div className="flex flex-col justify-center gap-4">
                <h2 className="text-[#154734] text-5xl font-bold leading-snug">Book Your Qurbani, <br /> Fulfill Your Faith</h2>
                <p>Choose from healthy livestock: Cows, Bulls, Goats & Sheep <br /> and book online with ease, trust & transparency.</p>
            </div>
            <Image src={banner} alt="Banner Image" width={420} height={300}
            className="rounded-3xl"
            ></Image>
        </div>
     );
}
 
export default Banner;