import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const NewsCard = () => {
     return (
          <Card className="w-full md:w-[20em] aspect-square p-0 overflow-hidden relative">
               <CardContent className="p-0">
                    <img src="/images/karang-bolong.jpg" alt="" className="w-full" />
               </CardContent>
               <CardHeader className="pb-5">
                    <Link href="">
                         <CardTitle className="text-xl">Festival Layangan</CardTitle>
                         <CardDescription>22 Juli 2025 - Pantai Karang Bolong</CardDescription>
                    </Link>
               </CardHeader>
          </Card>
     );
};

export default NewsCard;
