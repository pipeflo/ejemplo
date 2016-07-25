var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('User connected');
	var i = 0;
	for (i=1; i<=10; i++){
		io.emit('chat message', 'Mnesaje número ' + i);	
	}

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
