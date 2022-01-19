const { I } = inject();

module.exports = {

  fields:{},
  selects:{},
  buttons:{
    mesajKutuKapatBtn: "//div[@class='x-tool x-tool-close']",
    kayitKabulBtn: "//table[@id='patientAdmissionMainBTN']"
  },

  mesajKutusunuKapat : async function() {

    I.wait(4);
    I.switchTo("//iframe[@id='bafExplorer']");
    let mesajKutusu = await I.grabNumberOfVisibleElements(this.buttons.mesajKutuKapatBtn);

    if(mesajKutusu !== 0) {
        I.click(this.buttons.mesajKutuKapatBtn);
    }

  },

  kayitKabulEkranAc : function() {

    I.waitForElement(this.buttons.kayitKabulBtn);
    I.click(this.buttons.kayitKabulBtn);

  }


}
