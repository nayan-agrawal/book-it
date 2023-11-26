import { createEdgeRouter } from "next-connect"
import {NextRequest} from "next/server";
import {deleteRoom, updateRoomDetails} from "@/backend/controllers/roomControllers";
import dbConnect from "@/backend/config/dbConnect";

interface RequestContext {
    params: {
        id: string
    }
}

const router = createEdgeRouter<NextRequest, RequestContext>()

dbConnect();

router.put(updateRoomDetails);
router.delete(deleteRoom);

export async function PUT(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export async function DELETE(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}