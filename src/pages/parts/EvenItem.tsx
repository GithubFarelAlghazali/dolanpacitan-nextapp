import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type propsType = {
     title: string;
     desc: string;
     img: string;
};

const EventCard = (props: propsType) => {
     const { title, desc, img } = props;

     return (
          <Card className="w-96 p-0 overflow-hidden relative">
               <CardContent className="p-0">
                    <img src={`/images/events/${img}`} alt="" className="w-full aspect-3/4" />
               </CardContent>
               <CardHeader className="pb-5">
                    <Link href="">
                         <CardTitle className="text-xl">{title}</CardTitle>
                         <CardDescription>{desc}</CardDescription>
                    </Link>
               </CardHeader>
          </Card>
     );
};

export default EventCard;
