import { EventCard, EventSkeleton } from "@/pages/parts/EvenItem";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

// const data = [
//      {
//           title: "Festival Rontek Pacitan",
//           date: "5 - 7 Juli 2025",
//           location: "Alun-alun Kab. Pacitan",
//           img: "festival-rontek.jpg",
//      },
//      {
//           title: "Festival Nelayan Pacitan",
//           date: "25 Juni 2025",
//           location: "Pelabuhan Tamperan",
//           img: "festival-nelayan.jpg",
//      },
//      {
//           title: "Car Free Day",
//           date: "22 Juni 2025",
//           location: "Alun-alun Kab. Pacitan",
//           img: "cfd.jpg",
//      },
// ];

const SectionEvent = () => {
     const [data, setData] = useState([]);

     useEffect(() => {
          const url = "http://localhost:3000/api/event";
          try {
               fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                         setData(data.data);
                    });
          } catch (error) {
               console.error("Error fetching event data:", error);
          }
     });

     return (
          <section className="bg-purple-800 text-white w-screen p-18 md:p-32" id="event">
               <h2 className="font-semibold text-4xl">Event mendatang</h2>
               <Carousel className="w-full mt-10 mx-auto ">
                    <CarouselContent className="">
                         {data.length === 0
                              ? Array.from({ length: 3 }).map((_, index) => (
                                     <CarouselItem key={index} className="w-full flex justify-center items-center basis-full md:basis-1/3">
                                          <EventSkeleton key={index} />
                                     </CarouselItem>
                                ))
                              : data.map((item, index) => (
                                     <CarouselItem key={index} className="w-full flex justify-center items-center basis-full md:basis-1/3">
                                          <EventCard title={item.title} desc={`${item.date} | ${item.location}`} img={item.img} id={item.id} />
                                     </CarouselItem>
                                ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-transparent" />
                    <CarouselNext className="bg-transparent" />
               </Carousel>
          </section>
     );
};

export default SectionEvent;
