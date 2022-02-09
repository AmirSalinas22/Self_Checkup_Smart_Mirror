Module.register("checkup_title", {
    start: function () {
      const self = this;
      Log.info("Now Starting module: " + self.name);
    },
    
    getStyles: function () {
      return ["checkup_title.css"];
    },
    
    getDom: function () {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = `
        <div id="checkup_title">
        <div class="checkup_title">Self Checkup</div>
        </div> 
        `;
      return wrapper;
    },
  });
    