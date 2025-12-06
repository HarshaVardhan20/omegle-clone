import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
    console.log("A user connected");
});

httpServer.listen(3000, () => {
    console.log("server running on localhost:3000");
});
