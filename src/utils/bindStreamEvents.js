var bindStreamEvents = function(parent, child) {
	// handle events
	child.on('data', function(data) { parent.emit('data',data)});
	child.on('end',   function() { parent.emit('end')});
	child.on('error', function(error) { parent.emit('error',error)});	
	child.on('queue', function(queue) { parent.emit('queue', queue)});	
}

module.exports = bindStreamEvents;	