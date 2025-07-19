// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getDatabyId } from "@/lib/firebase/service";

type Data = {
     status: boolean;
     statusCode: number;
     data: {
          id: string;
          title: string;
          img: string;
     }[];
};

type Response = {
     status: boolean;
     statusCode: number;
     data: Data | null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
     const { id } = req.query;
     try {
          const data = await getDatabyId("destinations", id as string);

          if (!data) {
               return res.status(404).json({
                    status: false,
                    statusCode: 404,
                    data: null,
               });
          }
          res.status(200).json({ statusCode: 200, status: true, data });
     } catch (error) {
          console.error("Error fetching data:", error);
          res.status(500).json({
               status: false,
               statusCode: 500,
               data: null,
          });
     }
}
