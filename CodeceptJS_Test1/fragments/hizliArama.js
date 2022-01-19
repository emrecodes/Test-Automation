const { I } = inject();

module.exports = {

fields:{
  hastaAramaAlani:"//input[@id='edtPatientSearch']"
},
  
hastaArama: function(){
  I.switchTo('[src="=".../PatientAdmission/ObjectViewers/Patientadmission/patientadmissionviewer.html"]');
  I.fillField(this.fields.hastaAramaAlani,I.generateTCKimlikNo());
  console.log(I.generateTCKimlikNo());
  I.pressKey('Enter');
  I.wait(1);
},




}
