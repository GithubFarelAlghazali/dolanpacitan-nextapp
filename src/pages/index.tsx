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
               <div className="overflow-x-hidden bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/destinations/pantai-kasap.jpg')" }}>
                    <SectionHero data={destination} />
                    <SectionAbout />
                    <SectionEvent />
               </div>
          </>
     );
}
