import {NextRequest, NextResponse} from "next/server";
import Room, {IRoom} from "@/backend/models/room";
import {catchAsyncErrors} from "@/backend/middlewares/catchAsyncErrors";
import ErrorHandler from "@/backend/utils/errorHandler";
import APIFilters from "@/backend/utils/apiFilters";

// Get all rooms
export const allRooms = catchAsyncErrors(async (request: NextRequest) => {
    const resPerPage: number = 8;
    const {searchParams} = new URL(request.url);
    const queryStr: any = {};

    searchParams.forEach((value, key) => {
        queryStr[key] = value;
    });

    const roomsCount: number = await Room.countDocuments();

    const apiFilters = new APIFilters(Room, queryStr).search().filter();
    let rooms: IRoom[] = await apiFilters.query;
    const filteredRoomsCount: number  = rooms.length;
    apiFilters.pagination(resPerPage);
    rooms = await apiFilters.query.clone();

    return NextResponse.json({
        success: true,
        roomsCount,
        filteredRoomsCount,
        resPerPage,
        rooms
    });
});

// Create new Room
export const newRoom = catchAsyncErrors(async (request: NextRequest) => {
    const body = await request.json();

    const room = await Room.create(body);
    return NextResponse.json({
        success: true,
        room,
    });
});

// Get room details
export const getRoomDetails = catchAsyncErrors(async (req: NextRequest, {params}: { params: { id: string } }) => {
    const room = await Room.findById(params.id);
    if (!room) {
        throw new ErrorHandler('Room not found', 400);
    }

    return NextResponse.json({
        success: true,
        room,
    });
});

// Get room details
export const updateRoomDetails = catchAsyncErrors(async (req: NextRequest, {params}: { params: { id: string } }) => {
    let room = await Room.findById(params.id);
    const body = await req.json();
    if (!room) {
        throw new ErrorHandler('Room not found', 400);
    }

    room = await Room.findByIdAndUpdate(params.id, body, {new: true});

    return NextResponse.json({
        success: true,
        room,
    })
});

// Delete room
export const deleteRoom = catchAsyncErrors(async (req: NextRequest, {params}: { params: { id: string } }) => {
    let room = await Room.findById(params.id);
    if (!room) {
        throw new ErrorHandler('Room not found', 400);
    }

    // TODO: Delete images

    room = await Room.findByIdAndDelete(params.id);

    return NextResponse.json({
        success: true,
        room,
    });
});