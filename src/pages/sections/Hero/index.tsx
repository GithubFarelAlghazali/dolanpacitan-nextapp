import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CardCarousel from "@/pages/parts/Card";
import { useState, useEffect } from "react";

import { Josefin_Sans } from "next/font/google";

const titleFont = Josefin_Sans({
     subsets: ["latin"],
     weight: ["700"],
});

const SectionHero = () => {
     const [data, setData] = useState([]);

     useEffect(() => {
          fetch("/api/destination")
               .then((response) => response.json())
               .then((data) => {
                    setData(data.data);
               });
     });

     return (
          <main className="w-screen text-center h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat text-white pt-32" style={{ background: "rgba(0,0,0,0.5)" }} id="home">
               <h1 className={`${titleFont.className} text-2xl md:text-[3em] font-bold `}>Jelajahi keindahan nusantara di Pacitan</h1>
               <p>Kabupaten Pacitan, Jawa Timur, Indonesia</p>
               <section className="mt-32 md:mt-18 p-5 w-full">
                    <Carousel className="w-[85%]  mx-auto ">
                         <CarouselContent className="">
                              {data.map((item, index) => (
                                   <CarouselItem key={index} className="w-full flex justify-center items-center basis-full md:basis-1/3">
                                        <CardCarousel img={item.img} title={item.title} id={item.id} />
                                   </CarouselItem>
                              ))}
                         </CarouselContent>
                         <CarouselPrevious className="bg-transparent" />
                         <CarouselNext className="bg-transparent" />
                    </Carousel>
               </section>
          </main>
     );
};

export default SectionHero;
