import { Poppins, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Flip, ToastContainer } from "react-toastify";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})
const bengali = Noto_Serif_Bengali({
  variable: '--font-bengali',
  subsets: ['bengali'],
})

export const metadata = {
  title: "QurbaniHat | Home",
  description: "Choose from healthy livestock Cows, Bulls, Goats & Sheep and book online with ease trust & transparency",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`h-full antialiased ${poppins.className}`}
    >
      <body className='min-h-full flex flex-col'>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Flip}
        />
      </body>
    </html>
  );
}
