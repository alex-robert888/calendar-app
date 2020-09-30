module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/scss/variables/colors.scss";
                        @import "@/assets/scss/variables/dimensions.scss";
                        @import "@/assets/scss/classes/positioning.scss";
                        @import "@/assets/scss/classes/text.scss";
                        @import "@/assets/scss/classes/button.scss";
                        `
        }
      }
    }
  }