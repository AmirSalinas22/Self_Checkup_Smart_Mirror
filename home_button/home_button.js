Module.register("home_button", {
  start: function () {
    const self = this;
    Log.info("Now Starting module: " + self.name);
  },
  
  getStyles: function () {
   return ["home_button.css"];
  },
    
  getDom: function () {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div id="home_button">
      <button type = "button" onclick = "location = 'index.html'"
      class = "home_button">
        <span class = "home__text">Home</span>
        <span class = "home__icon">
          <ion-icon name="home"></ion-icon>
        </span>
      </button>
      </div> 
      `;
    return wrapper;
  },
});
    