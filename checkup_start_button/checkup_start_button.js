Module.register("checkup_start_button", {
    start: function () {
      const self = this;
      Log.info("Now Starting module: " + self.name);
    },
    
    getStyles: function () {
      return ["checkup_start_button.css"];
    },
    
    getDom: function () {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = `
        <div id="checkup_start_button">
        <button type = "button" onclick = "location = 'examination.html'"
        class = "checkup_start_button">
          <span class = "start__text">Full Checkup</span>
          <span class = "start__icon">
            <ion-icon name = "filing"></ion-icon>
          </span>
        </button>        
        </div> 
        `;
      return wrapper;
    },
  });
    