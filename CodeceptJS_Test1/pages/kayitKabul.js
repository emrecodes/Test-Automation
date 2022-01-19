const hizliArama = require("../fragments/hizliArama");
const kayıtKabul = require("../fragments/kayıtKabul");

const { I, hizliAramaFragment, kayıtKabulFragment, solPanelFragment} = inject();

module.exports = {

fields:{
  kabulKontrolAlani: '.x-grid3-row.x-grid3-row-collapsed.x-grid3-row-first.x-grid3-row-last.x-grid3-row'
},

hastaAra: function(){
hizliAramaFragment.hastaArama();
},

hastaKayit: function(){
kayıtKabulFragment.hastaOlustur();
},

kabulAlma: function(){
kayıtKabulFragment.kabulOlustur();
},

kayitEtme: function(){
solPanelFragment.kaydetmeIslemi();
},



}
