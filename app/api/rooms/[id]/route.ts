import dbConnect from "@/backend/config/dbConnect";
import {
  getRoomDetails,
  updateRoom,
} from "@/backend/controllers/roomControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(getRoomDetails);

export async function GET(request: NextRequest, ctx: RequestContext): Promise<any> {
  return router.run(request, ctx);
}
