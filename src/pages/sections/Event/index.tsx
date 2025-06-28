import EventCard from "@/pages/parts/EvenItem";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const SectionEvent = () => {
     return (
          <section className="bg-purple-800 text-white w-screen p-18 md:p-32" id="event">
               <h2 className="font-semibold text-4xl">Event mendatang</h2>
               <Carousel className="w-full mt-10 mx-auto ">
                    <CarouselContent className="">
                         {Array.from({ length: 8 }).map((_, index) => (
                              <CarouselItem key={index} className="w-full flex justify-center items-center basis-full md:basis-1/3">
                                   <EventCard />
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
