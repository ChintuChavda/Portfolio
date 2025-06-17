import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chintu Chavda - Frontend Developer",
  description:
    "I'm Chintu Chavda, a passionate frontend developer driven by creativity and a love for crafting beautiful user interfaces. With a strong self-learning mindset, I continuously explore modern web technologies to sharpen my skills. Specializing in JavaScript, I build dynamic and responsive web applications using frameworks like React.js and Next.js. I focus on delivering seamless user experiences, ensuring performance, accessibility, and clean design across all devices.",
  icons: {
      icon: "/CCC1.jpg", // Path to your favicon
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <Navbar />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white pt-14">
  {children}
  <ScrollToTop />
</main>

        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
