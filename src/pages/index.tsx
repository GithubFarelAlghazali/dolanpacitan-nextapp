import SectionHero from "./sections/Hero";
import SectionAbout from "./sections/About";
import SectionEvent from "./sections/Event";
import { GetServerSideProps } from "next";

type DestinationType = {
     id: string;
     title: string;
     img: string;
};

type HomeProps = {
     destination: DestinationType[];
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
     const res = await fetch("http://localhost:3000/api/destination");
     const data = await res.json();

     if (!data.status) {
          return {
               notFound: true,
          };
     }

     return {
          props: {
               destination: data.data,
          },
     };
};

export default function Home({ destination }: HomeProps) {
     return (
          <>
               <div style={{ background: "url('/images/destinations/pantai-kasap.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }} className="overflow-x-hidden">
                    <SectionHero data={destination} />
                    <SectionAbout />
                    <SectionEvent />
               </div>
          </>
     );
}
