import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
            radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.3), transparent),
            radial-gradient(circle 500px at 80% 80%, rgba(59,130,246,0.3), transparent)
          `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />

      
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
