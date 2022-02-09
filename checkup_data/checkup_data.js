Module.register("checkup_data", {
  start: function () {
    const self = this;
    Log.info("Now Starting module: " + self.name);
  },
    
  getStyles: function () {
    return ["checkup_data.css"];
  },
    
  getDom: function () {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div id="checkup_data">
      <button type = "button" 
      class = "checkup_data">
        <span class = "data__text">Data</span>
        <span class = "data__icon">
          <ion-icon name="filing"></ion-icon>
        </span>
      </button>
      </div> 
      `;
    return wrapper;
  },
});
    