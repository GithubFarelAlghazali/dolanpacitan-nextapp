import EventCard from "@/pages/parts/EvenItem";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const data = [
     {
          title: "Festival Rontek Pacitan",
          date: "5 - 7 Juli 2025",
          location: "Alun-alun Kab. Pacitan",
          img: "festival-rontek.jpg",
     },
     {
          title: "Festival Nelayan Pacitan",
          date: "25 Juni 2025",
          location: "Pelabuhan Tamperan",
          img: "festival-nelayan.jpg",
     },
     {
          title: "Car Free Day",
          date: "22 Juni 2025",
          location: "Alun-alun Kab. Pacitan",
          img: "cfd.jpg",
     },
];

const SectionEvent = () => {
     return (
          <section className="bg-purple-800 text-white w-screen p-18 md:p-32" id="event">
               <h2 className="font-semibold text-4xl">Event mendatang</h2>
               <Carousel className="w-full mt-10 mx-auto ">
                    <CarouselContent className="">
                         {data.map((item, index) => (
                              <CarouselItem key={index} className="w-full flex justify-center items-center basis-full md:basis-1/3">
                                   <EventCard title={item.title} desc={`${item.date} | ${item.location}`} img={item.img} />
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
