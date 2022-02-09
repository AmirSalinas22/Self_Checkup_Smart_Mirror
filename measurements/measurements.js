
//not a good idea to have this as a global variable, but using for testing purposes.
let sensorValue = "";
let weightValue= "0.0";
var heightValue = [];
let bmiValue = "0.0";
let tempValue= "95";
let oxygenValue = "98";
var measurementsArray = [];


const modes = {
  INIT: "INIT",
  WEIGHT: "WEIGHT",
  HEIGHT: "HEIGHT",
  TEMPERATURE: "TEMPERATURE",
}

Module.register("measurements", {
    start: function () {
      
      const self = this;
      
      self.sendSocketNotification(modes.INIT, "Initializing node helper...");

      setInterval(function() {
        Log.info("Now Starting module: " + self.name);
 
        //logic here to recieve and send data to nodehelper. can use switch case
        /*
        switch(mode) {
            case modes.INIT:
              Log.info("INIT");
              self.sendSocketNotification(mode, "Hi from measurements.js")
              mode = modes.WEIGHT;
              break;
            case modes.WEIGHT:
              Log.info("WEIGHT");

              break;
            default:
              Log.error("no sensor mode chosen");
        }
        */
        
        //right now python script is being created constantly
        //need to set flags here to change this.
        self.updateDom();
      }, 2000)
     
      //setInterval(function() {self.updateDom}, 1000);
      
    },

    socketNotificationReceived: function(notification, payload) {
      const self = this;
      if(notification === "DONEINIT"){
        Log.info("weight recieved");
        self.sendSocketNotification(modes.WEIGHT,"weight mode");
      }else if(notification === "SENDING_WEIGHT"){
        sensorValue = payload;
        measurementsArray = sensorValue.split(' ');
        if(measurementsArray[0] === "weight")
        {
            weightValue = measurementsArray[1];
        }
        else if(measurementsArray[0] === "height")
        {
            heightValue[0] = measurementsArray[1];
            heightValue[1] = measurementsArray[2];
        }
        else if(measurementsArray[0] === "bmi")
        {
            bmiValue = measurementsArray[1];
        }
        Log.info(payload);
      }
    },
  
    getStyles: function () {
      return ["measurements.css"];
    },
   
    
    //overriding getDom function
    getDom: function () {
     
      //variables to be updated will be here. variables will be global for now?
      const wrapper = document.createElement("div");
      
        wrapper.innerHTML = `
        <div id="measurements">
        <div class = "measurements">
          <span class = "measurements_datatext">`+ weightValue +`lbs</span>
          <span class = "measurements_text"> Weight</span>
        </div>
        <div class = "measurements">
          <span class = "measurements_datatext">` + heightValue[0] + `ft ` + heightValue[1] + `in </span>
          <span class = "measurements_text"> Height</span>
        </div>
        <div class = "measurements">
          <span class = "measurements_datatext">`+  bmiValue +`</span>
          <span class = "measurements_text"> BMI</span>
        </div> 
        <div class = "measurements">
          <span class = "measurements_datatext">`+ tempValue +`&#186F</span>
          <span class = "measurements_text"> Temperature</span>
        </div>
        
        </div>
      
        <div id = "options">
        <button type = "options" class = "options">
          <span class = "options_reset">Reset</span>
        <button type = "options" class = "options">
          <span class = "options_save">Save</span>
        </button>
        </div>

        
        `;
      //sensorValue += 1;
      
      return wrapper;
    },
  });
  