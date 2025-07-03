import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type propsType = {
     img: string;
     title: string;
     id: string;
};

const CardCarousel = (props: propsType) => {
     const { img, title, id } = props;
     return (
          <Card className="w-96 bg-transparent overflow-hidden flex flex-col relative p-0 md:aspect-3/2 aspect-square border-0 shadow-md">
               <img src={`/images/destinations/${img}`} className="h-full w-auto" alt={`Ilustrasi ${title}`} />
               <Link href={`/destination/${id}`} className="absolute w-full font-semibold text-white bottom-0 bg-black/50 p-4 text-left text-xl">
                    <CardContent>{title}</CardContent>
               </Link>
          </Card>
     );
};

export default CardCarousel;
