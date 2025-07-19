import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type propsType = {
     title: string;
     desc: string;
     img: string;
     id: string;
};

export const EventCard = (props: propsType) => {
     const { title, desc, img, id } = props;

     return (
          <Card className="w-96 p-0 overflow-hidden relative">
               <CardContent className="p-0">
                    <img src={`/images/events/${img}`} alt="" className="w-full aspect-3/4" loading="lazy" />
               </CardContent>
               <CardHeader className="pb-5">
                    <Link href={`/event/${id}`}>
                         <CardTitle className="text-xl">{title}</CardTitle>
                         <CardDescription>{desc}</CardDescription>
                    </Link>
               </CardHeader>
          </Card>
     );
};

export const EventSkeleton = () => {
     return (
          <Card className="w-96 p-0 overflow-hidden relative *:*:rounded-sm animate-pulse">
               <CardContent className="p-5">
                    <div className="w-full aspect-3/4 bg-gray-300"></div>
               </CardContent>
               <CardHeader className="pb-5  rounded-sm">
                    <CardTitle className="text-xl bg-gray-500 py-4"></CardTitle>
                    <CardDescription className="bg-gray-500 py-2"></CardDescription>
               </CardHeader>
          </Card>
     );
};
