import { Connection } from "mongoose";

declare global {
    var mongoose: {
        promise: Promise<Connection>;
        conn: Connection;
    };
}

export {};