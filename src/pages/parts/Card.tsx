import { Card, CardContent } from "@/components/ui/card";

type propsType = {
     img: string;
     title: string;
};

const CardComponent = (props: propsType) => {
     const { img, title } = props;
     return (
          <Card className="w-96 bg-transparent overflow-hidden flex flex-col relative p-0 md:aspect-3/2 aspect-4/3 border-0 shadow-md">
               <img src={`/images/${img}`} className="h-full w-auto" alt="" />
               <CardContent className="absolute w-full font-semibold text-white bottom-0 bg-black/50 p-4 text-left text-xl">
                    <h4>{title}</h4>
               </CardContent>
          </Card>
     );
};

export default CardComponent;
