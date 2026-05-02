import Image from "next/image";
import banner from '@/assets/banner.png'
import Link from "next/link";
import { GiCow } from "react-icons/gi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animationData from '@/assets/eid-animation.json';

const Banner = () => {
    return ( 
        <div className="max-w-6xl mx-auto mt-5 px-4 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
            <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start gap-4">
                {/* lotti welcome animation */}
                <div className="w-50 h-50 -mb-6 self-center"> 
                    <DotLottieReact 
                        data={animationData} 
                        loop 
                        autoplay 
                    />
                </div>
                <h2 className="text-[#154734] text-5xl font-bold leading-snug">Book Your Qurbani, <br /> Fulfill Your Faith</h2>
                <p>Choose from healthy livestock: Cows, Bulls, Goats & Sheep <br /> and book online with ease, trust & transparency.</p>
                <Link href={'/animals'}>
                    <button className="btn bg-[#154734] text-white rounded-3xl"><GiCow size={30}></GiCow> Browse</button>
                </Link>
            </div>
            <Image src={banner} alt="Banner Image" width={420} height={300}
            className="rounded-3xl"
            ></Image>
        </div>
     );
}
 
export default Banner;