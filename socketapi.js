const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );

    socket.on("sony",msg=>{
        // console.log(msg)
        // console.log(msg.message)
        // console.log(msg.grpname)
        socket.broadcast.to(msg.grpname).emit("max",msg.message)
    })
    socket.on("color",gpname=>{
        socket.join(gpname)
    })
});
// end of socket.io logic

module.exports = socketapi;