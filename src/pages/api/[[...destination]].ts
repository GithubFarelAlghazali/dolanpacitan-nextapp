// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getData, getDatabyId } from "@/lib/firebase/service";

type Data = {
     status: boolean;
     statusCode: number;
     data: {
          id: string;
          title: string;
          img: string;
     }[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
     if (req.query.destination[1]) {
          const data = await getDatabyId("destinations", req.query.destination![1]);
          res.status(200).json({ statusCode: 200, status: true, data });
     } else {
          const data = await getData("destinations");
          res.status(200).json({ statusCode: 200, status: true, data });
     }
}
