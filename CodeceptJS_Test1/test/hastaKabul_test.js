Feature('hastaKabul');

Before((I)=>{
    I.login();
});

Scenario('Hasta Kabul Senaryosu', async (I, girisPagePage,kayitKabulPage) => {

    await girisPagePage.mesajKutusunuKapat();
    girisPagePage.kayitKabulEkranAc();
    kayitKabulPage.hastaAra();
    kayitKabulPage.hastaKayit();
    kayitKabulPage.kabulAlma();
    kayitKabulPage.kayitEtme();


    //kabul kontrol

    I.waitForElement(kayitKabulPage.fields.kabulKontrolAlani);
    I.seeElement(kayitKabulPage.fields.kabulKontrolAlani);

});
