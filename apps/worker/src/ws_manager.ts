import type { WebSocket } from "ws";
import { WS_EVENTS } from "comman/ws_events";

interface Message {
    type: string;
    payload: any;
}

export class SocketManager {
    ws: WebSocket;
    constructor(ws: WebSocket) {
        this.ws = ws;
        this.init();
    }
    init() {
        this.ws.on("message", (event) => {
            const message: Message = JSON.parse(event.toString());
            switch (message.type) {
                case WS_EVENTS.generate_video:
                    const { prompt } = message.payload;
                    break;
                default:
                    break;
            }
        })
    }
}