Module.register("checkup_button", {
  start: function () {
    const self = this;
    Log.info("Now Starting module: " + self.name);
  },
  
  getStyles: function () {
    return ["checkup_button.css"];
  },
  
  getDom: function () {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div id="checkup_button">
      <button type = "button" onclick = "location = 'checkup.html'"
      class = "checkup_button">
        <span class = "button__text">Checkup</span>
        <span class = "button__icon">
          <ion-icon name="today"></ion-icon>
        </span>
      </button>
      </div>
      `;
    return wrapper;
  },
});
  