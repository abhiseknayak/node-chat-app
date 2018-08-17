var socket=io();
socket.on('connect',function(){
    console.log('connected to server');
});

socket.on('disconnect',function(){
    console.log('disconnected from server');
});

socket.emit('createMessage',{
    from:"Abhi",
    text:"this is done"
});

socket.on('newMessage',function(message){
    console.log('message',message);
    console.log(123);
})

