const { I } = inject();

module.exports = {

  buttons:{
  kaydetBtn: '#smallSaveButton',
  },

  kaydetmeIslemi: function(){
    I.waitForElement(this.buttons.kaydetBtn);
    I.waitForEnabled(this.buttons.kaydetBtn);
    I.click(this.buttons.kaydetBtn);
    I.wait(2);

  },

  
}
