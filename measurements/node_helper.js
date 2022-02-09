const NodeHelper = require("node_helper");
const Log = require("logger");

const { spawn } = require('child_process');

let pythonScript = null;

module.exports = NodeHelper.create({

	// Override start method.
	start: function () {
		console.log(`The module ${this.name}`);
		
	},
	
	// Override socketNotificationReceived method.
	socketNotificationReceived: function (notification, payload) {
		//initialize python, send data back that it was initialized,
		//once initilized, just keep stream of communication going here.



		if (notification === "INIT") {
			console.log(payload)
			this.runPython();
			this.sendSocketNotification("DONEINIT");
		}else if(notification === "WEIGHT") {
			console.log(payload);
			//just read and send back weight value.
			pythonScript.stdout.on('data', (data) => {
				//the data we are recieving needs to be parsed already in python script.
				console.log(`recieved data: ${data}`);
				
				this.sendSocketNotification("SENDING_WEIGHT", this.arrayBufferToString(data));
				//this.sendSocketNotification()
				
			});
		}

		
	},
	
	//this function can later have parameters that will tell python what to do
	runPython() {
		//should this be a global variable? that way python.stdout can be called elsewhere
		pythonScript = spawn('python3', ['/home/pi/MagicMirror/modules/default/measurements/sensors.py']);
		console.log("created python process")
		
	},
	/*execPython: function() {
		const python = spawn('python3', ['test.py']);
		console.log("created python process")
		var dataToSend = "hi";

		python.stdout.on('data', (data) => {
			console.log(`recieved data ${data}`)
		}); 
				
		python.stderr.pipe(python.stderr);
				
		python.on('close', function(data){
			console.log(dataToSend);
		});
	}
	*/

	stop: function() {
		console.log("Shutting down node helper and my module,closing python process");
		pythonScript.on('close', function(data){
			console.log("python closed");
		});
	},
	


	arrayBufferToString(buf) {
		return String.fromCharCode.apply(null, new Uint8Array(buf));
	},

});




 