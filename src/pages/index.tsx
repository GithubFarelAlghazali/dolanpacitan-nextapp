import SectionHero from "./sections/Hero";
import SectionAbout from "./sections/About";
import SectionEvent from "./sections/Event";

export default function Home() {
     return (
          <>
               <div style={{ background: "url('/images/pantai-kasap.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }} className="w-screen h-screen overflow-x-hidden">
                    <SectionHero />
                    <SectionAbout />
                    <SectionEvent />
               </div>
          </>
     );
}
