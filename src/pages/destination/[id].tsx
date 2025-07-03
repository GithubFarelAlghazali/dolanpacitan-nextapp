import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailDestinationPage = () => {
     const { query } = useRouter();
     const [data, setData] = useState([]);

     useEffect(() => {
          fetch("/api/destination/" + query.id)
               .then((response) => response.json())
               .then((data) => {
                    setData(data.data);
               });
     });

     return (
          <main className="bg-purple-200 w-screen p-18 md:p-32 flex flex-col md:flex-row gap-8" id="about">
               <div className="md:w-full">
                    <h2 className="font-semibold text-4xl mb-12">{data.title}</h2>
                    <img src={`/images/destinations/${data.img}`} alt="" className="w-full rounded-md" />
               </div>
               <article className="flex flex-col gap-3 md:w-full md:mt-32 text-sm md:text-base">
                    <p>Kabupaten Pacitan adalah sebuah kabupaten di barat daya provinsi Jawa Timur, berbatasan langsung dengan kabupaten Wonogiri, Jawa Tengah di sebelah barat, & samudera Hindia di sebelah selatan.</p>
                    <p>
                         Pacitan juga dikenal memiliki gua-gua yang indah, diantaranya Gua Gong, Gua Tabuhan (batu dapat dipukul dan berbunyi seperti alat musik gamelan), Gua Kalak (gua pertapaan), dan Gua Luweng Jaran (diduga sebagai kompleks gua
                         terluas di Asia Tenggara). Pacitan juga memiliki banyak pantai indah, seperti Pantai Klayar, Pantai Srau, Pantai Teleng Ria, dan Pantai Kasap. Selain itu, Pacitan juga dikenal sebagai kota kelahiran Presiden Indonesia ke-6,
                         Susilo Bambang Yudhoyono.
                    </p>
               </article>
          </main>
     );
};

export default DetailDestinationPage;
