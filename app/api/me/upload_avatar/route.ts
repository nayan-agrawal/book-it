import dbConnect from "@/backend/config/dbConnect";
import { uploadAvatar } from "@/backend/controllers/authControllers";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser).put(uploadAvatar);

export async function PUT(request: NextRequest, ctx: RequestContext): Promise<any> {
  return router.run(request, ctx);
}
