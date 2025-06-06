import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
export default function Home() {
    return (
    <div className="bg-[#f5eee7] h-screen">
            <Navbar />
            <div>
              <Hero/>
            </div>
        </div>
    );
}
