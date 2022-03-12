// write up websocket server

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 })

wss.on("connection", ws =>{
    console.log("new connection");

    ws.on("message", data => {
        console.log('Client sent: ' + data)
        // const data_str = JSON.stringify(data)
        const data_str = data.toString('utf-8')

        console.log(data_str)
        ws.send(data_str.toUpperCase());
    });

    ws.on("close", () => {
        console.log("disconnected");
    });
});