import Image from "next/image";
import logo from '@/assets/logo.png'
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import animationData from '@/assets/contact-animation.json';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-[#154734] text-neutral-content p-10 mt-10 flex flex-col lg:flex-row items-center lg:items-start justify-around gap-10 lg:gap-0">
            <aside className="flex flex-col items-center">
                <Image src={logo} alt="Company Logo" width={100} height={100}></Image>
                <p className="text-[16px] font-bold">QurbaniHat</p>
                <p className="text-[16px]">With ease, trust & transparency</p>
            </aside>

            {/* lotti */}
            <div className="w-48 h-48 lg:w-64 lg:h-64 self-center">
                <DotLottieReact
                    data={animationData}
                    loop
                    autoplay
                />
            </div>

            {/* info div */}
            <div className="flex flex-col gap-10">
                {/* social */}
                <div>
                    <h6 className="footer-title text-[16px]">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com" target="_">
                            <FaXTwitter size={20}></FaXTwitter>
                        </a>
                        <a href="https://www.facebook.com" target="_">
                            <FiYoutube size={20}></FiYoutube>
                        </a>
                        <a href="https://www.facebook.com" target="_">
                            <FaFacebook size={20}></FaFacebook>
                        </a>
                    </div>
                </div>

                {/* contact info */}
                <div>
                    <h6 className="footer-title text-[16px]">Contact Us</h6>
                    <div className="flex flex-col gap-2">
                        <p className="flex items-center gap-2 text-[16px]"><MdOutlineEmail></MdOutlineEmail> admin@qurbanihat.com</p>
                        <p className="flex items-center gap-2 text-[16px]"><IoCallOutline></IoCallOutline> +8801712345678</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;