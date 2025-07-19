import { TicketIcon, LocateIcon, DateIcon } from "../../../public/icons/icons";
import { GetServerSideProps } from "next";

type DestinationType = {
     id: string;
     title: string;
     img: string;
     location?: string;
     date?: string;
};

type DetailProps = {
     data: DestinationType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
     const { id } = context.params!;

     const protocol = context.req.headers.host?.startsWith("localhost") ? "http" : "https";
     const baseUrl = `${protocol}://${context.req.headers.host}`;

     const res = await fetch(`${baseUrl}/api/event/${id}`);
     const json = await res.json();

     if (!json.status) {
          return { notFound: true };
     }

     return {
          props: {
               data: json.data,
          },
     };
};

const DetailEventPage = ({ data }: DetailProps) => {
     return (
          <div className="overflow-x-hidden">
               <main className="bg-purple-200 w-screen p-18 md:p-32 flex flex-col lg:flex-row gap-8 ">
                    <div className="md:w-full">
                         <h1 className="font-semibold text-4xl mb-12">{data.title}</h1>
                         <img src={`/images/events/${data.img}`} alt="" className="relative w-full lg:w-2/3 mx-auto aspect-3/4 rounded-md overflow-hidden" />
                    </div>
                    <article className="flex flex-col gap-3 md:w-full md:mt-20 text-sm md:text-base">
                         <h3 className="font-semibold text-2xl mb-4">Info acara</h3>
                         <ul className="*:flex flex flex-col md:flex-row bg-purple-900 text-white p-5 rounded-md  gap-4 lg:gap-10  *:gap-2 *:items-start flex-wrap">
                              <li>
                                   <LocateIcon className="w-5 h-5 shrink-0" />
                                   {data.location}
                              </li>
                              <li>
                                   <TicketIcon className="w-5 h-5 shrink-0" />
                                   Gratis
                              </li>
                              <li>
                                   <DateIcon className="w-5 h-5 shrink-0" /> {data.date}
                              </li>
                         </ul>
                         <p>
                              Pacitan juga dikenal memiliki gua-gua yang indah, diantaranya Gua Gong, Gua Tabuhan (batu dapat dipukul dan berbunyi seperti alat musik gamelan), Gua Kalak (gua pertapaan), dan Gua Luweng Jaran (diduga sebagai kompleks
                              gua terluas di Asia Tenggara). Pacitan juga memiliki banyak pantai indah, seperti Pantai Klayar, Pantai Srau, Pantai Teleng Ria, dan Pantai Kasap. Selain itu, Pacitan juga dikenal sebagai kota kelahiran Presiden
                              Indonesia ke-6, Susilo Bambang Yudhoyono.
                         </p>
                    </article>
               </main>

               {/* {data ? (
                    <main className="bg-purple-200 w-screen p-18 md:p-32 flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-8">
                         <div className="md:w-full">
                              <h1 className="font-semibold text-4xl mb-12">{data.title}</h1>
                              <img src={`/images/destinations/festival-rontek.jpg`} alt="" className="relative w-full aspect-video rounded-md overflow-hidden" />
                         </div>
                         <article className="flex flex-col gap-3 md:w-full md:mt-20 text-sm md:text-base">
                              <h3 className="font-semibold text-2xl mb-4">Tentang {data.title}</h3>
                              <ul className="*:flex flex flex-col md:flex-row bg-purple-900 text-white p-5 rounded-md  gap-4 lg:gap-10  *:gap-2 *:items-start ">
                                   <li>
                                        <LocateIcon /> Gumuharjo, Watukarung, Kec. Pringkuku, Kabupaten Pacitan, Jawa Timur
                                   </li>
                                   <li>
                                        <TicketIcon /> Rp7.000/org
                                   </li>
                              </ul>
                              <p>
                                   Pacitan juga dikenal memiliki gua-gua yang indah, diantaranya Gua Gong, Gua Tabuhan (batu dapat dipukul dan berbunyi seperti alat musik gamelan), Gua Kalak (gua pertapaan), dan Gua Luweng Jaran (diduga sebagai
                                   kompleks gua terluas di Asia Tenggara). Pacitan juga memiliki banyak pantai indah, seperti Pantai Klayar, Pantai Srau, Pantai Teleng Ria, dan Pantai Kasap. Selain itu, Pacitan juga dikenal sebagai kota kelahiran
                                   Presiden Indonesia ke-6, Susilo Bambang Yudhoyono.
                              </p>
                         </article>
                         <section className="col-span-2">
                              <iframe
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15794.507524216038!2d110.97260023301688!3d-8.240221882371037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bdde98e5438dd%3A0x61e796fc381a11db!2sPantai%20Kasap!5e0!3m2!1sid!2sid!4v1752130488242!5m2!1sid!2sid"
                                   className="w-full h-56 lg:h-full rounded-md"
                                   loading="lazy"
                                   referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                         </section>
                    </main>
               ) : (
                    <main className="bg-purple-200 w-screen p-18 md:p-32 flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-8 animate-pulse">
                         <div className="md:w-full *:rounded-md">
                              <h1 className="font-semibold text-4xl mb-12 bg-purple-100 py-8"></h1>
                              <div className="w-full rounded-md aspect-video bg-purple-300"></div>
                         </div>
                         <article className="flex flex-col gap-3 md:w-full md:mt-20 text-sm md:text-base *:rounded-md">
                              <h3 className="font-semibold text-2xl mb-4 py-5 bg-purple-100"></h3>
                              <ul className="*:flex flex flex-col md:flex-row bg-purple-900 text-white p-5 rounded-md  gap-4 lg:gap-10  *:gap-2 *:items-start py-8"></ul>
                              <p className="py-25 bg-purple-50"></p>
                         </article>
                         <section className="col-span-2 bg-gray-100 rounded-md"></section>
                    </main>
               )} */}
          </div>
     );
};

export default DetailEventPage;
