import * as mongoose from "mongoose";

const connection = {}

async function connect() {
    if (connection.isConnected) {
        console.log('already connected')
        return
    }

    if (mongoose.connection.length > 0) {
        connection.isConnected = mongoose.connection.readyState
        if (connection.isConnected === 1) {
            console.log('Use previous connection')
            return
        }
        await mongoose.disconnect()
    }

    const db = await mongoose.connect(process.env.MONGODB_URI)
    console.log('New connection')
    connection.isConnected = db.connection.readyState
}

async function disconnect() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {
            console.log('not disconnected');
        }
    }
}

const db = {connect, disconnect}
export default db