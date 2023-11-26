import {NextRequest, NextResponse} from "next/server";
import Room from "@/backend/models/room";

// Get all rooms
export const allRooms = async (request: NextRequest) => {
    const resPerPage: number = 10;
    const rooms = await Room.find();
    return NextResponse.json({
        success: true,
        rooms
    });
}

// Create new Room
export const newRoom = async (request: NextRequest) => {
    const body = await request.json();

    const room = await Room.create(body);
    return NextResponse.json({
        success: true,
        room,
    });
}

// Get room details
export const getRoomDetails = async (req: NextRequest, { params }: { params: { id: string }}) => {
    const room = await Room.findById(params.id);
    if (!room) {
        return NextResponse.json({
            message: "Room not found!"
        }, { status: 404 });
    }

    return NextResponse.json({
        success: true,
        room,
    })
}

// Get room details
export const updateRoomDetails = async (req: NextRequest, { params }: { params: { id: string }}) => {
    let room = await Room.findById(params.id);
    const body = await req.json();
    if (!room) {
        return NextResponse.json({
            message: "Room not found!"
        }, { status: 404 });
    }

    room = await Room.findByIdAndUpdate(params.id, body, {new: true});

    return NextResponse.json({
        success: true,
        room,
    })
}

// Delete room
export const deleteRoom = async (req: NextRequest, { params }: { params: { id: string }}) => {
    let room = await Room.findById(params.id);
    if (!room) {
        return NextResponse.json({
            message: "Room not found!"
        }, { status: 404 });
    }

    // TODO: Delete images

    room = await Room.findByIdAndDelete(params.id);

    return NextResponse.json({
        success: true,
        room,
    });
}