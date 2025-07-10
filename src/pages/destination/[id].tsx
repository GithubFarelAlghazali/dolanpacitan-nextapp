import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TicketIcon, LocateIcon } from "../../../public/icons/icons";

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
          <main className="bg-purple-200 w-screen p-18 md:p-32 flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-8">
               <div className="md:w-full">
                    <h1 className="font-semibold text-4xl mb-12">{data.title}</h1>
                    <img src={`/images/destinations/${data.img}`} alt="" className="w-full rounded-md" />
               </div>
               <article className="flex flex-col gap-3 md:w-full md:mt-20 text-sm md:text-base">
                    <h3 className="font-semibold text-2xl mb-4">Tentang {data.title}</h3>
                    <p>Kabupaten Pacitan adalah sebuah kabupaten di barat daya provinsi Jawa Timur, berbatasan langsung dengan kabupaten Wonogiri, Jawa Tengah di sebelah barat, & samudera Hindia di sebelah selatan.</p>
                    <p>
                         Pacitan juga dikenal memiliki gua-gua yang indah, diantaranya Gua Gong, Gua Tabuhan (batu dapat dipukul dan berbunyi seperti alat musik gamelan), Gua Kalak (gua pertapaan), dan Gua Luweng Jaran (diduga sebagai kompleks gua
                         terluas di Asia Tenggara). Pacitan juga memiliki banyak pantai indah, seperti Pantai Klayar, Pantai Srau, Pantai Teleng Ria, dan Pantai Kasap. Selain itu, Pacitan juga dikenal sebagai kota kelahiran Presiden Indonesia ke-6,
                         Susilo Bambang Yudhoyono.
                    </p>
               </article>
               <section className="col-span-2">
                    <iframe
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15794.507524216038!2d110.97260023301688!3d-8.240221882371037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bdde98e5438dd%3A0x61e796fc381a11db!2sPantai%20Kasap!5e0!3m2!1sid!2sid!4v1752130488242!5m2!1sid!2sid"
                         className="w-full h-56 lg:h-full rounded-md"
                         loading="lazy"
                         referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <ul className="*:flex flex flex-col md:flex-row my-10 bg-purple-900 text-white p-5 rounded-md  gap-4 lg:gap-10 *:w-full *:gap-2">
                         <li>
                              <LocateIcon /> Gumuharjo, Watukarung, Kec. Pringkuku, Kabupaten Pacitan, Jawa Timur
                         </li>
                         <li>
                              <TicketIcon /> Rp7.000/org
                         </li>
                    </ul>
               </section>
          </main>
     );
};

export default DetailDestinationPage;
