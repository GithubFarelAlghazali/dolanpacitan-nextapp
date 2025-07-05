import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type propsType = {
     img: string;
     title: string;
     id: string;
};

export const CardCarousel = (props: propsType) => {
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

export const CardSkeleton = () => {
     return (
          <Card className="w-96 bg-gray-400 overflow-hidden flex flex-col relative p-0 md:aspect-3/2 aspect-square border-0 shadow-md animate-pulse opacity-75">
               <CardContent className="absolute left-2 right-2  font-semibold text-white bottom-2 bg-black/50 p-4 text-left text-xl  rounded-sm"></CardContent>
          </Card>
     );
};
