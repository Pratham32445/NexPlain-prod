import ws, { WebSocketServer } from "ws";
import { SocketManager } from "./ws_manager";

const wss = new WebSocketServer({port : 3001});

wss.on("connection",(ws : WebSocket) => {
    new SocketManager(ws);
})