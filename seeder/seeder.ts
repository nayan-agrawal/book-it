import mongoose from "mongoose";
import Room from "../backend/models/room";
import { rooms } from "./data";
require('dotenv').config({ path: 'next.config.js' })

const seedRooms = async () => {
    try {
        await mongoose.connect(process.env.DB_URI!);
        await Room.deleteMany();
        console.log("Rooms are deleted!");

        await Room.insertMany(rooms);
        console.log("Rooms are added");
        process.exit();
    } catch (error) {
        console.log("error", error);
        process.exit();
    }
};
seedRooms();