import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScrollToTopWrapper from "./components/helper/ScrollToTopWrapper"; // Import the wrapper
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Mohamed Ali Romdhani - Cloud Computing Student",
  description:
    "I'm Mohamed Ali Romdhani, a Cloud Computing student at ESPRIT passionate about DevOps and cloud technologies. I specialize in Kubernetes, Docker, and CI/CD pipelines. A quick learner with hands-on experience in OpenStack infrastructure and automation tools like Ansible. Currently seeking internship opportunities to apply my skills in real-world cloud environments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTopWrapper /> {/* Use the wrapper */}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}