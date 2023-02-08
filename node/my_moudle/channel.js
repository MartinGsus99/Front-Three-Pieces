const events=require('events');
const net=require('net');
const channel=new events.EventEmitter();
var fullMessage="";

channel.clients={};
channel.subscriptions={};

channel.on('join',function(id,client){
    this.clients[id]=client;
    const welcomeMessage=`Welcome! ${this.listeners('broadcase').length+1} guests online!`;
    client.write(`${welcomeMessage}\n`);
    this.subscriptions[id]=(senderId,message)=>{
        if(id!=senderId){
            this.clients[id].write("Message from user "+id+":"+message+".\n");
        }
    };
    this.on('broadcase',this.subscriptions[id]);
    console.log(`${id} has enter the chatroom.\n`);
    channel.emit('boradcast',id,`${id} has enter the chatroom.\n`);
});

//绑定leave事件；
channel.on('leave',function(id){
    channel.removeListener('broadcast',this.subscriptions[id]);
    console.log(`${id} has left the chatroom.\n`);
    channel.emit('boradcast',id,`${id} has left the chatroom.\n`);
});

//绑定lshuwdown事件,提出所有用户；
channel.on('shutdown',function(id){
    channel.emit('broadcast','','The server has shut down.\n');
    console.log(`${id} has close the chatroom.\n`);
    channel.removeAllListeners('broadcast');
});

//设定监听器最多的数量为50；
channel.setMaxListeners(50);

const server=net.createServer(client=>{
    const id=`[${client.remoteAddress}:${client.remotePort}]`;
    channel.emit('join',id,client);
    client.on('data',data=>{
        data=data.toString();
        if(data==='*'){
            channel.emit('shutdown',id);
        }
        if(data==='-'){
            channel.emit('leave',id);
        }
        channel.emit('broadcase',id,data);
    });
    client.on('close',()=>{
        channel.emit('leave',id);
    });
});

server.listen(8888);