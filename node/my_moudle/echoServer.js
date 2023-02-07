const net=require('net');
const server=net.createServer(socket=>{
    socket.on('data',data=>{
        socket.write("Your message is: "+data+".\n");
    });
});

server.listen(8000,'127.0.0.1');