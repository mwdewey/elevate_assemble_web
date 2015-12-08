var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('pos',function(pos){
    socket.broadcast.emit('pos', pos);
  });
  socket.on('obj',function(obj){
    socket.broadcast.emit('obj',obj);
  });
  socket.on('score',function(score){
    socket.broadcast.emit('score',score);
  });
  socket.on('invG',function(inv){
    socket.broadcast.emit('invG',inv);
  });
  socket.on('invW',function(inv){
    socket.broadcast.emit('invW',inv);
  });
  socket.on('invR',function(inv){
    socket.broadcast.emit('invR',inv);
  });
});

http.listen(8081, function(){
  console.log('listening on *:8081');
});
