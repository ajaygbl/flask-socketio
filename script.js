var socket = io.connect('http://localhost:5000');

socket.on('connect', function() {
    socket.send('I am now succesfully connected');
	
	socket.on('message', function(msg){
		alert(msg);
	});
});

setTimeout(function() {
  location.reload();
            }, 3000);